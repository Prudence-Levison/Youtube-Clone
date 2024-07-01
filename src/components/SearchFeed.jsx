import { useState, useEffect}from "react";
import { Box , Typography} from "@mui/material";
import {Videos} from "./";
import { fetchFROMAPI } from "../utils/fetchFROMAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const {searchTerm} = useParams() ;
  const [videos, setVideos] = useState([]);
  useEffect ( () => {
  fetchFROMAPI(`search?part=snippet&q=${searchTerm}`)
  .then((data) => setVideos(data.items))
  }, [searchTerm])
    return(
        <Box p={2}  sx={{ overflowY:"auto", height:'90vh', flex: 2}}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color:'white'}}>
             Search Result For: <span style={{ color : '#F31503'}}>{searchTerm}</span> Videos</Typography>
          <Videos videos={videos} />
        </Box>
        
    )
}
 export default SearchFeed;