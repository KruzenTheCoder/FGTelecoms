-- Supabase SQL Schema for Fine Golding

-- Leads Table
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    service_interest TEXT,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Fault Tickets Table
CREATE TABLE fault_tickets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_name TEXT NOT NULL,
    account_number TEXT NOT NULL,
    fault_category TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT DEFAULT 'Open',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS) Setup
-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE fault_tickets ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts but restrict reads
CREATE POLICY "Allow anonymous inserts on leads" 
ON leads FOR INSERT TO anon 
WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on fault_tickets" 
ON fault_tickets FOR INSERT TO anon 
WITH CHECK (true);

-- Restrict reads (only authenticated users can read, assuming you have an admin role or authenticated users)
-- Example: 
-- CREATE POLICY "Allow authenticated users to read leads" ON leads FOR SELECT TO authenticated USING (true);
-- CREATE POLICY "Allow authenticated users to read fault_tickets" ON fault_tickets FOR SELECT TO authenticated USING (true);
