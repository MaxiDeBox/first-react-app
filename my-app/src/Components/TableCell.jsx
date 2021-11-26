export function TableCell(props) {
  const { children, ...datum } = props;
  return (
    <td style={{
      border: "1px solid gray",
      padding: "10px",
      textAlign: "center",
      ...style
    }}
    {...datum}>
      {children}
    </td>
  );
}
