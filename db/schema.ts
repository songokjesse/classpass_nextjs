import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import {sql} from "drizzle-orm";

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true}),
    clerkId: text('clerkId').notNull().unique(),
    email: text('email').notNull().unique(),
    name: text('name').notNull(),
    password: text('password').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const students = sqliteTable("students", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("userId").references(() => users.id),
    admission_number: text("admission_number").notNull(),
    created_at: text("created_at")
        .notNull()
        .default(sql`(current_timestamp)`),
    updated_at: text("updated_at")
        .notNull()
        .default(sql`(current_timestamp)`),
});

export const courses = sqliteTable("courses", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("userId").references(() => users.id),
    course_name: text("course_name").notNull(),
    course_code: text("course_code").notNull(),
    created_at: text("created_at")
        .notNull()
        .default(sql`(current_timestamp)`),
    updated_at: text("updated_at")
        .notNull()
        .default(sql`(current_timestamp)`),
});

export const timetables = sqliteTable("timetables", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    courseId: integer("courseId").references(() => courses.id),
    timetable_code: text("timetable_code").notNull(),
    location_name: text("location_name").notNull(),
    lesson_date: text("lesson_date").notNull(),
    start_time: text("start_time").notNull(),
    end_time: text("end_time").notNull(),
    created_at: text("created_at")
        .notNull()
        .default(sql`(current_timestamp)`),
    updated_at: text("updated_at")
        .notNull()
        .default(sql`(current_timestamp)`),
});

export const attendances = sqliteTable("attendances", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    studentId: integer("studentId").references(() => students.id),
    timetableId: integer("timetableId").references(() => students.id),
    created_at: text("created_at")
        .notNull()
        .default(sql`(current_timestamp)`),
    updated_at: text("updated_at")
        .notNull()
        .default(sql`(current_timestamp)`),
});
