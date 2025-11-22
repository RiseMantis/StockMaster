# StockMaster Inventory Management System (IMS)

> Overview:

StockMaster is a lightweight, single-page application (SPA) designed to digitize and streamline stock-related operations. It replaces manual registers and spreadsheets with a centralized, real-time platform for tracking products, managing inventory levels, and logging all movements (Receipts, Deliveries, Transfers, and Adjustments).

The application is built entirely within a single index.html file, leveraging modern web technologies and Google Firestore for real-time data synchronization.

> Core Features:s

The system is organized into several key views, accessible via the sidebar navigation:

1. Dashboard

The landing page provides a high-level, real-time snapshot of the inventory state, featuring:

KPIs: Total Products, Low Stock Items (below 10 units), Completed Receipts, and Completed Deliveries.

Alerts: A visual indicator for the number of products below the Low Stock Threshold.

Recent Activity: A feed of the last 5 completed inventory moves.

2. Product Catalog

Manage the master data for all trackable items:

CRUD: Create and edit product records (Name, SKU, Category, Unit of Measure).

Stock Visibility: Shows the current "On Hand" quantity, color-coded based on stock level.

Search: Quick filtering by Product Name or SKU.

3. Operations Hub

This is the central point for executing changes to the inventory:

New Receipt: Record incoming stock (e.g., from a vendor). (Stock increases).

Delivery Order: Record outgoing stock (e.g., to a customer). (Stock decreases).

Internal Transfer: Log the movement of stock between locations (e.g., Warehouse to Production Floor). (Total Stock is unchanged).

Stock Adjustment: Correct inventory discrepancies (physical count vs. recorded stock). (Stock increases or decreases based on type).

4. Move History

Provides a complete, searchable ledger of all inventory transactions ("Moves"):

Each entry logs the date, product, move type, quantity change, source/target location, and the user who validated the move.

