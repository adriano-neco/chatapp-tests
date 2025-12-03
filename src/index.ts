import express, { Request, Response, Application } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic API routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Chat App API' });
});

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/api/users', (req: Request, res: Response) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  res.json({ users });
});

app.post('/api/users', (req: Request, res: Response) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required' });
    return;
  }
  
  const newUser = {
    id: Math.floor(Math.random() * 1000),
    name,
    email
  };
  
  res.status(201).json({ user: newUser });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
