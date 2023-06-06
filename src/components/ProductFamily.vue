<script setup lang="ts">
import { useMutation, useQuery } from "@vue/apollo-composable"
import { gql } from "graphql-tag"
import { ref, computed } from "vue"
import { ProductFamilyCreationInput, ProductFamilyQueryInput} from "../graphql-operations"

const { type } = defineProps({ type: String })
const newTodoTitle = ref("")
const insertProductFamily= useMutation(ProductFamilyCreationInput)
// const { mutate: sendMessage } = useMutation(ProductFamilyCreationInput )

async function insertProductFamilies() {
    try 
    {
        const result = await insertProductFamily.mutate({
            input: {
                name: "asdfsd",
                remark: "這是測試 !!",
                ownerEmplayeeId: "01978"
            }
        }
        )
        // const { mutate: sendMessage } = useMutation(ProductFamilyCreationInput)
        // Handle the result of the mutation, e.g., update the UI or display a success message
        console.log('Inserted todo:', result)
    }
    
    catch (error) 
    {
    // Handle any errors that occur during the mutation
    console.error('Error inserting todo:', error);
    }
}

async function qProductFamilies() {
    try 
    {
        // const { mutate: sendMessage } = useMutation(ProductFamilyCreationInput)
        const queryResult = useQuery(ProductFamilyQueryInput)
        // Handle the result of the mutation, e.g., update the UI or display a success message
        const Products = computed(() => queryResult ?? [])

        return { Products }
    }
    
    catch (error) 
    {
    // Handle any errors that occur during the mutation
    console.error('Error inserting todo:', error);
    }
}

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

</script>

<template>
    <div class="formInput">
        <input
            class="input"
            placeholder="Create product family!"
            v-model="newTodoTitle"
            @keyup.enter="$event => insertProductFamilies()"
        />
        <i class="downArrow fa fa-angle-down" />
    </div>
</template>


// {
//   "input": {
//     "name": "QCC5121",
//     "remark": "這是測試 !!",
//     "ownerEmplayeeId": "01978"
//   }
// }