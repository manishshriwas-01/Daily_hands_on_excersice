import express from 'express'
import { MongoClient,ObjectId } from 'mongodb';

const app = express();
app.use(express.json());

const PORT = 3000;

const MONGO_URL = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(MONGO_URL);

const db = client.db("companyDB");

const employees=db.collection("employees");

app.get('/', (req, res) => {
    res.json({
        message: "MongoDb hands on Api running"
    });
});

app.post('/employees',async(req,res)=>{
    try{
        const result=await employees.insertOne(req.body);
        res.status(200).json({
            message:"Employee created",
            insertedId:result.insertedId
        });
    }catch(error){
        res.status(500).json({
            error:error.message
        });
    }
});

app.get('/employees',async(req,res)=>{
    try{
        const result=await employees.find({}).toArray();
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({
      error: error.message
    });
    }
});

app.get("/employees/first", async (req, res) => {
  try {
    const employee = await employees.findOne({
      name: "Rahul"
    });

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

app.get("/employees/search", async (req, res) => {
  try {
    const { department } = req.query;

    const result = await employees.find({
      department: department
    }).toArray();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

app.get("/employees/explain", async (req, res) => {
    try {
        const result = await employees
            .find({
                department: "IT"
            })
            .explain("executionStats");

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

app.put('/employees/:id', async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);

    const result = await employees.updateOne(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          department: req.body.department,
          salary: req.body.salary,
          city: req.body.city
        }
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    res.status(200).json({
      message: "Employee updated successfully"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

app.delete('/employees/:id', async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);

    const result = await employees.deleteOne({
      _id: id
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    res.status(200).json({
      message: "Employee deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});




async function startServer() {
    try {
        await client.connect();

        console.log("MongoDB connected successfully");
        await employees.createIndex({
            department: 1
        });

        console.log("Index created successfully");

        app.listen(PORT, () => {
            console.log(`server is runnning on port ${PORT}`);
        });
    }catch(error){
        console.error('MongoDb connection failed',error);
    }
}
startServer();
