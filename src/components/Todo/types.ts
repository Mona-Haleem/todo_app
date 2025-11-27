/**
 * Type definitions for Todo domain models.
 * Defines the Todo interface used throughout the application.
 */

export type Todo = {
    id: string;
    task :string;
    completed :boolean;
    description:string;
}