
const login = () =>{
    const { loading, data } = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
      });
      const matchupList = data?.matchups || [];
      return(
        <div>
            </div>

      );

};

export default App;