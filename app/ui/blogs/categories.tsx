type NodeType = {
  node: {
    name: string
  }
}

type Categories = {
  edges: NodeType[] | NodeType
}

export default function Categories({ categories }: {categories: Categories}) {
  return (
    <span className="ml-1">
      under
      {(categories.edges as NodeType[]).length > 0 ? (
        (categories.edges as NodeType[]).map((category, index) => (
          <span key={index} className="ml-1">
            {category.node.name}
          </span>
        ))
      ) : (
        <span className="ml-1">{(categories.edges as NodeType).node.name}</span>
      )}
    </span>
  );
}
