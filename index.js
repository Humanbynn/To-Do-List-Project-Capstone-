import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();


app.use(express.static('Public'));
app.use(bodyParser.urlencoded({ extended: true }));

const tasks = [{task: "Wake up by 6am"},
{task: "Prepare for Work"},
{task:  "Have Breakfast"},
{task: "Hit the road by 7:15am"},
{task:  "Lunch Break by 12noon"},
{task: "Grocery Shopping by 5:30pm"},
{task: "Dinner by 7:30pm"},
{task: "Read for at least 30mins"},
{task: "Skin care routine"}, 
{task: "Go to bed by 10pm"}];

const workTasks = [{task:"Check Emails"},
{task:"Review schedule"},
{task:"Phone Calls"},
{task:"Prepare Documents"},
{task:"Filing"},
{task:"Order Office Supplies"},
{task:"Travel Arrangements"},
{task:"Attend Meetings"},
{task:"Office Cleanup"}]

app.get('/', (req, res) => {
   
    res.render('index.ejs', { tasks });
    
});

app.get ('/work', (req,res)=>{
    res.render ('work.ejs', {workTasks});
})

app.post('/add', (req, res) => {
    const newTask = req.body.task;
    tasks.push({ task : newTask, completed: false });
    res.redirect('/');
});

app.post('/addW', (req, res) => {
    const newTask = req.body.task;
    workTasks.push({ task : newTask, completed: false });
    res.redirect('/work'); 
});



// app.get('/complete/:index', (req, res) => {
//     const index = req.params.index;
//     if (index >= 0 && index < tasks.length) {
//         tasks[index].completed = true;
//     }
//     res.redirect('/');
// });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
