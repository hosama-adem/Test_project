import Idea from "../models/idea.js";



exports.createIdea = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if (!title || !description) {
      return res.status(400);
    }

    const newIdea = new Idea({
      title,
      description,
      category: category || 'General',
      createdAt: new Date()
    });

    const savedIdea = await newIdea.save();

    res.status(201).json({
      message: 'Idea created successfully',
      data: savedIdea
    });
  } catch (error) {
    res.status(500);
  }
};

exports.getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find().sort({ createdAt: -1 });

    res.status(200)
  } catch (error) {
    res.status(500);
  }
};

// exports.updateideas = async (req, res) => {
//     try {
//         const ideas_id = req.params.id;
//         if ideasid === -1 {
//             return res.status(400)
//         }
//         else {
//             return res.json(ideas[ideas_id])
//         }
//     } catch (error) {
//     res.status(500);
// }


// exports.deleteidea = async (req, res) => {
//     try {
//         const ideas_id = req.params.id;
        

        
//     }catch (error) {
//         res.status(500);
//     }
// }