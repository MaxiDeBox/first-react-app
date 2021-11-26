export function TableRow(props) {
  const { children, ...datum } = props;
  return (
    <tr {...datum}>
    {children}
    </tr>
  );
}
