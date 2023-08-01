import http from './axios-common';

export function getAllHeroes(){
    const [heroes,setHeroes] = useState([]);
    useEffect(()=>{
                getHeroesFromAPI();}, 
                        []
    );
    getAllHeroes()
      .then(res => {
              setHeroes(res.data);
                })
                  .catch(err => {
                          setHeroes([]);
                                console.log(err);
                  })
        return http.get("/heroes");
}

const getHeroesFromAPI = ()=>{}

export function saveHero(hero){
    const navigate = useNavigate();
    const handleSubmit =(event)=>{
         event.preventDefault();
          let hero = {};
           hero.alias = alias;
            hero.name = name;
             hero.ability = ability;
              hero.teamID = teamID;
               saveHero(hero)
                  .then(res => {
                          setAbility('');
                                setAlias('');
                                      setName('');
                                            setTeamId(0);
                                                  navigate("/")
                  })
                      .catch(err=>{
                               console.log(err);
                                     })   
                                     }
                  
        return http.post("/heroes", hero)
        }
