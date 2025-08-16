export default function Box({ className, id, ref, onClick, ...props }) {
  return (
    <div id={id} className={className} ref={ref} onClick={onClick}>
      {props.children}
    </div>
  );
}
