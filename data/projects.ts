export interface Project {
    id: number;
    title: string;
    area: 'Website Development' | 'Mobile App Development' | 'Graphics Design';
    image: string;
}

// Website Development Projects
export const websiteProjects: Project[] = [
    {
        id: 1,
        title: 'Inventory Management System',
        area: 'Website Development',
        image: '/images/software/inventory-management.jpg',
    },
    {
        id: 2,
        title: 'E-commerce Platform',
        area: 'Website Development',
        image: '/images/software/ecommerce-platform.jpg',
    },
    {
        id: 3,
        title: 'Online Learning Portal',
        area: 'Website Development',
        image: '/images/software/learning-portal.jpg',
    },
];

// Mobile App Development Projects
export const mobileProjects: Project[] = [
    {
        id: 1,
        title: 'Task Tracker App',
        area: 'Mobile App Development',
        image: '/images/software/task-tracker.jpg',
    },
    {
        id: 2,
        title: 'Chat Application',
        area: 'Mobile App Development',
        image: '/images/software/chat-app.jpg',
    },
];

// Graphics Design Projects
export const graphicsProjects: Project[] = [
    {
        id: 1,
        title: 'Brand Logo Design',
        area: 'Graphics Design',
        image: '/images/graphics/logo-design.jpg',
    },
    {
        id: 2,
        title: 'Event Poster',
        area: 'Graphics Design',
        image: '/images/graphics/event-poster.jpg',
    },
    {
        id: 3,
        title: 'Business Card Design',
        area: 'Graphics Design',
        image: '/images/graphics/business-card.jpg',
    },
    {
        id: 4,
        title: 'Website UI Mockup',
        area: 'Graphics Design',
        image: '/images/graphics/ui-mockup.jpg',
    },
    {
        id: 5,
        title: 'Product Packaging',
        area: 'Graphics Design',
        image: '/images/graphics/packaging.jpg',
    },
];
