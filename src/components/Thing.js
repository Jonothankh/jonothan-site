import './Thing.css'

const Thing = (props) =>
{
    return (
        <div className="card">
            <div className="card-tags-wrapper">
                {props.tags.length > 0 && props.tags.map((tag, index) => (
                    <div key={"tag_" + index} className="card-tag">{tag}</div>
                ))}
            </div>

            <div className="card-image-container">
                {props.image.length > 0 && <img alt={""} className="card-image" src={require('../images/' + props.image)} />}
            </div>

            <h3 className="card-title">{props.title}</h3>

            <p className="card-description">{props.description}</p>

            <div className="card-stack-wrapper">
                {props.stack.length > 0 && props.stack.map((stackItem, index) => (
                    <div key={"stackItem_" + index} className="stack-item">{stackItem}</div>
                ))}
            </div>

            <div className="card-links-wrapper">
                {Object.keys(props.links).length > 0 && Object.keys(props.links).map((link, index) => (
                    <a key={"link_" + index} className="link" href={props.links[link]}>{link}</a>
                ))}
            </div>

        </div>
    )
}

export default Thing;