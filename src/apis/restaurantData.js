import axios from "axios";

const apiUrl = "https://restaurants-api-u5ww.onrender.com";

export const getRestaurants = async (setRestaurants,token,setLoading) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        setLoading(true);
        const { data } = await axios.get(`${apiUrl}/api/restaurants`, config);
        setRestaurants(data.data);
        setLoading(false)
      } catch (error) {
          setLoading(false)
          console.log(error)
        // localStorage.removeItem("authToken");
        // setError("You are not authorized please login");
      }
    }

    export const getUsers = async (setUsers,token,setLoading) => {
      const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
  
        try {
          setLoading(true)
          const { data } = await axios.get(`${apiUrl}/api/users`, config);
          setUsers(data.data);
          setLoading(false)
        } catch (error) {
          setLoading(false)
            console.log(error)
          // localStorage.removeItem("authToken");
          // setError("You are not authorized please login");
        }
      }

    export const getRestaurant = async (restaurantId,setRestaurant,setRatings,token,setLoading) => {
        console.log(token,"-----tok")
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
    
          try {
            setLoading(true)
            const { data } = await axios.get(`${apiUrl}/api/restaurants/${restaurantId}`, config);
            const { data:ratingsData } = await axios.get(`${apiUrl}/api/ratings/${restaurantId}`, config);
            console.log(ratingsData,"----------------rad")
            setRestaurant(data.data);
            setRatings(ratingsData.data?.reverse())
            setLoading(false)
          } catch (error) {
              setLoading(false)
              console.log(error)
            // localStorage.removeItem("authToken");
            // setError("You are not authorized please login");
          }
        }
