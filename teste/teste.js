

async function getProducts() {
  try {
    const res = await axios.fetch("https://dummyjson.com/products");
    const data = await res.data.products;

    const filteredProducts = data.map((product) => ({
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      tags: {
        tag1: product.tags[0],
        tag2: product.tags[1],
      },
    }));
    console.log(filteredProducts);
    return filteredProducts;
  } catch (err) {
    console.log(err);
  }
}

// export const products: Products[] = ;

getProducts();
