'use server'

import { unstable_noStore as noStore } from "next/cache";
import pool from "@/config/mariadb";

export async function getUsers() {
  noStore();

  let conn;
  console.log("conn: ", conn);
  
  try {
    
    conn = await fetchConn();
    console.log("conn2: ", conn);

    // Use Connection
    var rows = await get_users(conn);    
    for (let i = 0, len = rows.length; i < len; i++) {
      console.log("Total connections: ", pool.totalConnections());
      console.log("Active connections: ", pool.activeConnections());
      console.log("Idle connections: ", pool.idleConnections());
      console.log(`${rows[i].user_id} : ${rows[i].name}`);
    }
    return rows;
  } catch (err) {
    // Manage Errors
    console.log(err);
  } finally {
    // Close Connection
    if (conn) conn.end();
  }
}

// Fetch Connection
async function fetchConn() {
  console.log(111);
  
  console.log("pool: ", pool);
  let conn = await pool.getConnection();
  console.log("conn1: ", conn);
  
  console.log("Total connections: ", pool.totalConnections());
  console.log("Active connections: ", pool.activeConnections());
  console.log("Idle connections: ", pool.idleConnections());
  return conn;
}

//Get list of contacts
async function get_users(conn: any) {
  return await conn.query("SELECT * FROM users u");
}
