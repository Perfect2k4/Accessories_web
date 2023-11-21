export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Rating",
    dataIndex: "rating",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (text) => <a>{text}</a>,
  },
];
