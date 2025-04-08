require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const landing = require("../backend/routes/landing");
const homePage = require("../backend/routes/HomePage"); 
const taskRoutes = require('./routes/task');
const testpage = require('./routes/testpage');



const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to DB
// connectDB();

mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log("MongoDB connected");
        }
    ).catch((error) => {
        console.error("Database connection error", error);
        process.exit(1);
    }
);
        
        
//         ;
//         console.log("MongoDB connected");
//     } catch (error) {
//         console.error("Database connection error", error);
//         process.exit(1);
//     }
    
// };

app.use("/edward", landing);
app.use("/homePage", homePage);
app.use('/tasks', taskRoutes);
app.use('/testpage', testpage);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
