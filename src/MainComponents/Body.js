import source from '../starter-code/assets/icon-source.svg'

export default function Body() {

    return (
        <div className="main-body">
            <div className="info-buttons">
                <button>Overview</button>
                <button>Structure</button>
                <button>Surface</button>
            </div>
            <img src="#" alt="mercury" className="img-planet"/>
            <div className="info">
                <h1 className="title">Mercury</h1>
                <p className="description">Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terres trial planets in the Solar System, and is a rocky body like Earth.</p>
                <p className="description">Source : <a href="#" className="wiki-link">Wikipedia</a> <img src={source}/></p>
            </div>
        </div>
    )
}