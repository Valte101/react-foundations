import LikeButton from './like-button';
function Header({james}) {
return <h1>{james ? james : 'Default title'}</h1>;
}

export default function HomePage(){
const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

return (<div>
    <Header james="Develop. Preview. Ship." />
    <ul>
        {names.map((name) => (
        <li key={name}>{name}</li>
        ))}
    </ul>
    <LikeButton />
</div>
);
}