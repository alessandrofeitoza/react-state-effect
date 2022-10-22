export default function Button(props) {
    let style = "btn btn-" + props.cor;
  
    return (
      <button className={style}>{props.children}</button>
    )
}