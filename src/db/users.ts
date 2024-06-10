'use server'

import { unstable_noStore as noStore } from "next/cache";
import pool from "@/config/mariadb";

export async function getUsers() {
  noStore();

  let conn;

  try {
    
    conn = await fetchConn();

    // Use Connection
    var rows = await get_users(conn);    
    for (let i = 0, len = rows.length; i < len; i++) {
      console.log("Total connections: ", pool.totalConnections());
      console.log("Active connections: ", pool.activeConnections());
      console.log("Idle connections: ", pool.idleConnections());
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
  let conn = await pool.getConnection();  
  console.log("Total connections: ", pool.totalConnections());
  console.log("Active connections: ", pool.activeConnections());
  console.log("Idle connections: ", pool.idleConnections());
  return conn;
}

//Get list of contacts
async function get_users(conn: any) {
  return await conn.query("SELECT * FROM users u");
}
