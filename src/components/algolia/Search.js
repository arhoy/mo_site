import algoliasearch from 'algoliasearch';

const client = algoliasearch('714W90HQBY', '8e9f9cf23622c5b24ac4fec66b98a3d7');

const index = client.initIndex('demo_ecommerce');

const data = fetch('https://alg.li/doc-ecommerce.json')
  .then(function(response) {
    console.log(response.json());
    return response.json();
  })
  .then(function(products) {
    index.addObjects(products);
  });

export default data;
