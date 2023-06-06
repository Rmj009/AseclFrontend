<script setup lang="ts">
import { useMutation } from "@vue/apollo-composable"
// import { gql } from "graphql-tag"
import { ref } from "vue"
import { ProductFamilyCreationInput} from "../graphql-operations"

const { type } = defineProps({ type: String })
const newTodoTitle = ref("")
const insertProductFamily= useMutation(ProductFamilyCreationInput)

async function addProductFamily({ todoTitle, type }: { todoTitle: string; type: string }) {
    // Reset the input field
    newTodoTitle.value = ""

    const title = todoTitle && todoTitle.trim()
    const is_public = type === "public"

    // insert new todo into db
    const result = await insertProductFamily.mutate(
        {
            object: {
                title,
                is_public,
            },
        },
        {
            optimisticResponse: {
                insert_todos_one: {
                    __typename: "todos",
                    id: -1,
                    title,
                    is_public,
                    is_completed: false,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                },
            },
            update(cache, { data: { insert_todos_one } }) {
                cache.modify({
                    fields: {
                        todos(existingTodos = []) {
                            const newTodoRef = cache.writeFragment({
                                data: insert_todos_one,
                                fragment: gql`
                                    fragment NewTodo on Todo {
                                        id
                                        title
                                        is_public
                                        is_completed
                                        created_at
                                        updated_at
                                    }
                                `,
                            })
                            return [newTodoRef, ...existingTodos]
                        },
                    },
                })
            },
        }
    )

    console.log("mutate result", result)
}


// {
//   "input": {
//     "name": "QCC5121",
//     "remark": "這是測試 !!",
//     "ownerEmplayeeId": "01978"
//   }
// }