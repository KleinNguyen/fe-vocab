<template>
    <div>
        <h1>Show word</h1>

        <div class="ui fluid labeled input ">
            <div class="ui label">
                <i class="germany flag"></i> German
            </div>
            <input type="text" readonly  :value="word.german" style="width: 100% !important;"/>
        </div>
        <br>
        <div class="ui fluid labeled input ">
            <div class="ui label">
                <i class="united kingdom flag"></i> English
            </div>
            <input type="text" readonly  :value="word.english" style="width: 100% !important;"/>
        </div>

        <br>
        <div>
            <router-link :to="{name:'Edit', params: {id:route.params.id}}" class="ui yellow button">
            Edit Word</router-link>
        </div>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import { getAllVocabById } from '@/helpers/api';

export default {
    name: 'Show',
    setup() {
    const route = useRoute();

    const word = ref({
        german: "",
        english: ""
    });

    onMounted(async () => {
        const res = await getAllVocabById(route.params.id);
        if (res) {
        word.value = res;
        }
    });

    return { word, route };
    }

}
</script>