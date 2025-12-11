export function dumpProducts(data) {
  if (!data?.length) return [];

  return data.map(dumpProduct);
}

export function dumpProduct(item) {
  return {
    id           : item.id,
    documentId   : item.documentId,
    title        : item.title,
    articleNumber: item.article_number,
    description  : item.description,
    price        : item.price,
    image        : item.image || null,
    inStock      : !!item.in_stock,
    isPreorder   : !!item.is_preorder,
    createdAt    : new Date(item.createdAt).getTime(),
    updatedAt    : new Date(item.updatedAt).getTime(),
    publishedAt  : new Date(item.publishedAt).getTime(),
  };
}
