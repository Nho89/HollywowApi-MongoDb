import Poster from "../models/PosterModel.js"

//GET
export const getAllPosters = async (request, response) => {
   
    try {
    const posters = await Poster.find({});
    response.status(200).json(posters);
}
catch(error){
    response.status(500).json({message: error.message})
}

}

//GET BY ID 

export const getPosterById = async  (request,response)=>{
    try {
        const poster = await Poster.findById(request.params.id);    
        
        if(!poster){
            return response.status(404).json({message: "Poster not found"});
        }
        response.status(200).json(poster);    
    } 
    catch (error) {
        response.status(500).json({message: error.message})
    }

}

//DELETE
export const deletePoster = async (request, response) => {
    try {
        const poster = await Poster.findByIdAndDelete(request.params.id);
        if(!poster){
            return response.status(404).json({message: "Poster not found"});
        }
        response.status(200).json({message: "Poster se eliminó correctamente"});
    
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

//POST

export const createPoster = async(request,response)=>{
     
    try {
        const poster = await Poster.create(request.body)
        response.status(201).json(poster); 
    } catch (error) {

        response.status(500).json({message: error.message})
    }
} 


//UPDATE

export  const updatePoster=async (request,response)=> {
    try {
        await Poster.findOneAndUpdate(request.body)
             response.status(200).json({
            message:"Se actualizó el poster correctamente"
        });
    
       
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}