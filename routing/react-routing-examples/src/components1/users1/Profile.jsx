import {NavLink, useLocation } from "react-router-dom";
const Profile = () => {
  let loc = useLocation();
  console.log(location);
  let { avatar_url, login, html_url, repos_url } = loc.state;
  return (
    <section id="profile">
      <article>
        <header>
          <NavLink to="/allusers" className="back_btn">Back</NavLink>
          <picture>
            <img src={avatar_url} alt={login} />
          </picture>
        </header>
        <main>
          <h2>{login}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos
            debitis doloremque, possimus quo porro. Rerum mollitia sed ratione
            quisquam, libero illum exercitationem a dolorem nemo consectetur!
            Mollitia ea porro, sit possimus ab error, culpa adipisci aut
            obcaecati recusandae ut alias officiis ullam vel. Corporis dolores
            nostrum soluta praesentium quibusdam.
          </p>
          <a href={html_url} target="_blank" rel="noreference">
            view Github profile
          </a>
        </main>
      </article>
    </section>
  );
};

export default Profile;
