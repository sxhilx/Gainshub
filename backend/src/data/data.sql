-- users table

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"

CREATE TABLE IF NOT EXISTS users(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    fullname VARCHAR(20) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);


-- workouts table

CREATE TABLE IF NOT EXISTS workouts(
    id  UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    training_week INT NOT NULL,
    movement_type VARCHAR(20) NOT NULL,
    exercise_name VARCHAR(20) NOT NULL,
    weight NUMERIC(5,2) NOT NULL,
    sets INT NOT NULL,
    reps VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)

-- PR table

CREATE TABLE IF NOT EXISTS prs(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    exercise_name VARCHAR(20) NOT NULL,
    weight NUMERIC(5,2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)