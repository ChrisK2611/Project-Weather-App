const Muenchen = (props) => {
    return ( 
        <section>
            <div>
                {props.weather} in {props.name}{''}
                <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="" />
            </div>
            <div>Temperatur: {props.temp}°C</div>
            <div>Wind: {props.wind}km/h</div>
        </section>
     );
}
 
export default Muenchen;