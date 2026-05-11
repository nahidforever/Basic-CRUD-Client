import { Button, Table } from "@heroui/react";

export function ProductsTable({ products }) {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Product Name</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>Stock</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>
          <Table.Body>
            {products.map((product) => (
              <Table.Row key={product._id}>
                <Table.Cell>{product.title}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>{product.stock}</Table.Cell>
                <Table.Cell>
                  <Button className="mr-3">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
