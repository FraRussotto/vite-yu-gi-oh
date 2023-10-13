import { reactive } from 'vue';

export const store = reactive({
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  cardList: [],
  objectSearch: null,
  archetypeApi: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  archetypeList: []
})