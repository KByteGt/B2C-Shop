
const CardDeck = (props) =>{


    return (
        <>
            <h1>{props.title}</h1>
            <hr />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                {props.children}
            </div>
            <br />
        </>
    );
}

export default CardDeck;
