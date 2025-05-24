export default function Box({ className, id, ref, ...props }) {
  return (
    <div id={id} className={className} ref={ref}>
      {props.children}
    </div>
  );
}
