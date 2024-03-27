
const State = require('../Models/stateSchema');
const getItem = async (req, res) =>{
    res.send('Heyy girl')
}


const createState = async (req, res) => {
    try {
        const { local, assembly, constituency, district, districts } = req.body;

        const newState = new State({
            local,
            assembly,
            constituency,
            district,
            districts
        });

        const savedState = await newState.save();

        res.status(201).json(savedState);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};





const getAllStates = async (req, res) => {
    try {
        const states = await State.find();
        res.json(states);
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports={
    getItem,
    createState,
    getAllStates
}