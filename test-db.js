const { Pool } = require('pg');

// Test 1: Transaction mode pooler (port 6543)
async function test1() {
  const pool = new Pool({
    connectionString: 'postgresql://postgres.lojsdmnqcrmajmnflbpz:Vitbhopal%22%405@aws-0-ap-south-1.pooler.supabase.com:6543/postgres',
    ssl: { rejectUnauthorized: false }
  });
  try {
    const r = await pool.query('SELECT 1 as test');
    console.log('Test 1 (port 6543):', r.rows);
  } catch (e) {
    console.error('Test 1 (port 6543) error:', e.message);
  } finally {
    pool.end();
  }
}

// Test 2: Session mode pooler (port 5432)
async function test2() {
  const pool = new Pool({
    connectionString: 'postgresql://postgres.lojsdmnqcrmajmnflbpz:Vitbhopal%22%405@aws-0-ap-south-1.pooler.supabase.com:5432/postgres',
    ssl: { rejectUnauthorized: false }
  });
  try {
    const r = await pool.query('SELECT 1 as test');
    console.log('Test 2 (port 5432):', r.rows);
  } catch (e) {
    console.error('Test 2 (port 5432) error:', e.message);
  } finally {
    pool.end();
  }
}

// Test 3: Direct connection 
async function test3() {
  const pool = new Pool({
    connectionString: 'postgresql://postgres.lojsdmnqcrmajmnflbpz:Vitbhopal%22%405@db.lojsdmnqcrmajmnflbpz.supabase.co:5432/postgres',
    ssl: { rejectUnauthorized: false }
  });
  try {
    const r = await pool.query('SELECT 1 as test');
    console.log('Test 3 (direct):', r.rows);
  } catch (e) {
    console.error('Test 3 (direct) error:', e.message);
  } finally {
    pool.end();
  }
}

async function main() {
  await test1();
  await test2();
  await test3();
}

main();
