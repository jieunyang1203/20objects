// Updated object data based on document
const objects = [
    {
        id: 1, 
        name: "Mac", 
        image: "mac.png",
        importance: 10, 
        visibility: "public", 
        categories: ["daily", "personal", "public"],
        desc: "Mainly functions as a digital workspace, also needed for watching YouTube and Netflix.",
        connections: [17, 15] // Coffee, Notebook
    },
    {
        id: 2, 
        name: "Candle", 
        image: "candle.png",
        importance: 5, 
        visibility: "personal", 
        categories: ["personal"],
        desc: "A gift from a friend, she told me it brings good luck.",
        connections: [8, 20] // Buddha, Letter
    },
    {
        id: 3, 
        name: "Bookmark", 
        image: "bookmark.png",
        importance: 1, 
        visibility: "personal", 
        categories: ["daily", "personal"],
        desc: "Was too lazy to search or buy a proper bookmark so I ripped chocolate box wrapper that was beside my bed instead, been using it for almost a year now.",
        connections: [18] // Book
    },
    {
        id: 4, 
        name: "Doll", 
        image: "doll.png",
        importance: 3, 
        visibility: "personal", 
        categories: ["personal"],
        desc: "Gift from someone who used to be a very close friend who I'm no longer friends with, but I didn't have the heart to throw it away.",
        connections: [20, 2] // Letter, Candle
    },
    {
        id: 5, 
        name: "ID Card", 
        image: "id.png",
        importance: 6, 
        visibility: "public", 
        categories: ["public"],
        desc: "ID card from when I was an exchange student in LA. That period really changed my perspective and set a path for my future.",
        connections: [2] // Candle
    },
    {
        id: 6, 
        name: "Cat Food", 
        image: "catfood.png",
        importance: 9, 
        visibility: "public", 
        categories: ["public", "daily"],
        desc: "My cat's favorite pouch. It makes her happy and connects me to her because she runs to me every time I bring one out.",
        connections: [16] // Pajamas
    },
    {
        id: 7, 
        name: "Digestive Medicine", 
        image: "med.png",
        importance: 3, 
        visibility: "personal", 
        categories: ["daily", "personal"],
        desc: "I have a hard time digesting stuff when I'm sleep deprived or stressed, and nothing has worked better than this.",
        connections: [1, 15] // Mac, Notebook
    },
    {
        id: 8, 
        name: "Unknown God", 
        image: "buddah.png",
        importance: 6, 
        visibility: "personal", 
        categories: ["personal"],
        desc: "A charm of a god whose name I do not remember. Bought in Thailand, supposed to bring love and abundance. Spent $200 on it.",
        connections: [20, 2, 4] // Letter, Candle, Doll
    },
    {
        id: 9, 
        name: "Cat Figure", 
        image: "cat.png",
        importance: 5, 
        visibility: "personal", 
        categories: ["personal"],
        desc: "Mom bought me this wooden cat figure from a trip abroad instead of letting me have a real cat. Still have it although we have a real cat now.",
        connections: [16, 19] // Pajamas, Harry Potter
    },
    {
        id: 10, 
        name: "Nail Clipper", 
        image: "clip.png",
        importance: 4, 
        visibility: "personal", 
        categories: ["personal", "daily"],
        desc: "Keeping my nails short and clean is a must. One of my ideal types in a guy is that he does that too. Shows hygiene care.",
        connections: [12, 16] // Eye Mask, Pajamas
    },
    {
        id: 11, 
        name: "Diary", 
        image: "diary.png",
        importance: 1, 
        visibility: "personal", 
        categories: ["personal"],
        desc: "Every year I buy a diary hoping to write regularly but never succeed. Have a file of barely written diaries in my desk drawer.",
        connections: [15] // Notebook
    },
    {
        id: 12, 
        name: "Eye Mask", 
        image: "eye.png",
        importance: 7, 
        visibility: "personal", 
        categories: ["personal", "daily"],
        desc: "Really sensitive to light and need total darkness when sleeping. Also like to put them on during meditation.",
        connections: [16] // Pajamas
    },
    {
        id: 13, 
        name: "Lottery", 
        image: "lottery.png",
        importance: 3, 
        visibility: "personal", 
        categories: ["personal"],
        desc: "Like to buy lottery once every few weeks, still hoping to win someday. Buy scratchable ones for instant results.",
        connections: [2, 8] // Candle, Buddha
    },
    {
        id: 14, 
        name: "Mirror", 
        image: "mirror.png",
        importance: 10, 
        visibility: "public", 
        categories: ["public", "daily"],
        desc: "Can't go out without looking at the mirror and making myself at least a bit presentable. Basic but of huge importance.",
        connections: [10] // Nail Clipper
    },
    {
        id: 15, 
        name: "Notebook", 
        image: "notebook.png",
        importance: 8, 
        visibility: "personal", 
        categories: ["personal"],
        desc: "Still like to use pen and paper when coming up with ideas or memorizing things. Feels different from writing on iPad.",
        connections: [1] // Mac
    },
    {
        id: 16, 
        name: "Pajamas", 
        image: "pajamas.png",
        importance: 7, 
        visibility: "personal", 
        categories: ["personal"],
        desc: "Do not feel at home and comfortable unless in pajamas. My mom is the same way, think she influenced me on this.",
        connections: [12] // Eye Mask
    },
    {
        id: 17, 
        name: "Coffee", 
        image: "coffee.png",
        importance: 8, 
        visibility: "public", 
        categories: ["daily", "public"],
        desc: "Cannot function properly without having coffee in the morning. Currently this is my favorite one.",
        connections: [1] // Mac
    },
    {
        id: 18, 
        name: "Favorite Book", 
        image: "book.png",
        importance: 6, 
        visibility: "personal", 
        categories: ["personal"],
        desc: "About Theravada Buddhism, talks about being aware of awareness. Some methods have helped me immensely.",
        connections: [3, 19] // Bookmark, Harry Potter
    },
    {
        id: 19, 
        name: "Harry Potter", 
        image: "harry.png",
        importance: 9, 
        visibility: "personal", 
        categories: ["personal"],
        desc: "The reason I started to love reading. Reading this repeatedly as a kid helped me be fluent in English, impacted huge parts of my life.",
        connections: [18, 9] // Book, Cat Figure
    },
    {
        id: 20, 
        name: "Letter", 
        image: "letter.png",
        importance: 7, 
        visibility: "personal", 
        categories: ["personal"],
        desc: "From a close friend when staying at my house. Her touching words made me want to be that kind of person too.",
        connections: [2] // Candle
    }
];

// Global variables
let currentView = 'network';
let canvas, ctx;
let centerX, centerY;
let objectNodes = [];
let hoveredObjectId = null;

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    updateCanvasSize();
    createNetworkView();
    drawConnections(); // Always show connections
});

window.addEventListener('resize', () => {
    updateCanvasSize();
    updateNodePositions();
});

function initCanvas() {
    canvas = document.getElementById('connections-canvas');
    ctx = canvas.getContext('2d');
}

function updateCanvasSize() {
    // Get device pixel ratio for crisp lines on high-DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Set actual canvas size in memory (scaled up)
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    // Set display size (scaled down to original size)
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    
    // Scale the drawing context to match device pixel ratio
    ctx.scale(dpr, dpr);
    
    centerX = rect.width / 2;
    centerY = rect.height / 2;
}


function createNetworkView() {
    const container = document.getElementById('network-container');
    
    // Clear existing nodes
    const existingNodes = container.querySelectorAll('.object-node');
    existingNodes.forEach(node => node.remove());
    objectNodes = [];
    
    // Create object nodes with original circular positioning
    objects.forEach((obj, index) => {
        const node = document.createElement('div');
        
        // Set visibility class
        const visClass = obj.visibility === 'public' ? 'public' : 'personal';
        node.className = `object-node ${visClass}`;
        
        // Size based on importance
        const sizeClass = Math.ceil(obj.importance / 2);
        node.classList.add(`node-size-${sizeClass}`);
        
        // Responsive circular positioning
        const angle = (index / objects.length) * Math.PI * 2 - Math.PI / 2;
        const isMobile = window.innerWidth <= 768;
        
        let baseRadiusX, baseRadiusY, randomVariationX, randomVariationY;
        
        if (isMobile) {
            // Mobile layout - smaller, tighter circle
            baseRadiusX = Math.min((window.innerWidth * 0.30), 280) * 1.0;
            baseRadiusY = Math.min((window.innerHeight * 0.25), 220) * 1.0;
            randomVariationX = 40;
            randomVariationY = 30;
        } else {
            // Desktop layout - original size
            baseRadiusX = Math.min((window.innerWidth * 0.35), 380) * 1.1;
            baseRadiusY = Math.min((window.innerHeight * 0.30), 290) * 1.1;
            randomVariationX = 60;
            randomVariationY = 40;
        }
        
        const radiusX = baseRadiusX + (Math.random() - 0.5) * randomVariationX;
        const radiusY = baseRadiusY + (Math.random() - 0.5) * randomVariationY;
        const x = centerX + Math.cos(angle) * radiusX;
        const y = centerY + Math.sin(angle) * radiusY;
        
        node.style.left = x + 'px';
        node.style.top = y + 'px';
        node.style.backgroundImage = `url('${obj.image}')`;
        node.style.animationDelay = `${index * 0.05}s`;
        
        // Store original position and data
        node.dataset.id = obj.id;
        node.dataset.x = x;
        node.dataset.y = y;
        node.originalX = x;
        node.originalY = y;
        
        // Add label
        const label = document.createElement('div');
        label.className = 'node-label';
        label.textContent = obj.name;
        node.appendChild(label);
        
        // Add click handler
        node.addEventListener('click', showModal);
        
        // Add hover handlers for status panel and highlighting
        node.addEventListener('mouseenter', function() {
            hoveredObjectId = obj.id;
            updateStatusPanel(obj, true);
            drawConnections(); // Redraw with highlights
        });
        
        node.addEventListener('mouseleave', function() {
            hoveredObjectId = null;
            updateStatusPanel(null, false);
            drawConnections(); // Redraw without highlights
        });
        
        // Add simple drag behavior (no physics)
        addSimpleDragBehavior(node);
        
        container.appendChild(node);
        objectNodes.push(node);
    });
    
    currentView = 'network';
}

function networkView() {
    clearActiveButtons();
    document.getElementById('btn-network').classList.add('active');
    createNetworkView();
    drawConnections();
}

function importanceView() {
    clearActiveButtons();
    document.getElementById('btn-importance').classList.add('active');
    
    objectNodes.forEach(node => {
        const obj = objects.find(o => o.id == node.dataset.id);
        
        // Distance from center based on importance (closer = more important)
        const distanceFactor = 1 - (obj.importance / 10);
        const isMobile = window.innerWidth <= 768;
        
        let maxRadiusX, maxRadiusY, minRadiusX, minRadiusY;
        
        if (isMobile) {
            // Mobile importance layout
            maxRadiusX = Math.min(window.innerWidth * 0.30, 280) * 1.0;
            maxRadiusY = Math.min(window.innerHeight * 0.25, 220) * 1.0;
            minRadiusX = 80;
            minRadiusY = 60;
        } else {
            // Desktop importance layout
            maxRadiusX = Math.min(window.innerWidth * 0.35, 380) * 1.1;
            maxRadiusY = Math.min(window.innerHeight * 0.30, 290) * 1.1;
            minRadiusX = 100;
            minRadiusY = 80;
        }
        
        const radiusX = minRadiusX + (distanceFactor * maxRadiusX);
        const radiusY = minRadiusY + (distanceFactor * maxRadiusY);
        const angle = (obj.id / objects.length) * Math.PI * 2 - Math.PI / 2;
        
        const x = centerX + Math.cos(angle) * radiusX;
        const y = centerY + Math.sin(angle) * radiusY;
        
        node.style.left = x + 'px';
        node.style.top = y + 'px';
        node.dataset.x = x;
        node.dataset.y = y;
    });
    
    currentView = 'importance';
    drawConnections();
}

function drawConnections() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Enable smooth lines
    ctx.imageSmoothingEnabled = true;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Update node highlighting classes
    objectNodes.forEach(node => {
        node.classList.remove('highlighted');
        if (hoveredObjectId && node.dataset.id == hoveredObjectId) {
            node.classList.add('highlighted');
        }
    });
    
    // Draw connections between objects (thin dotted lines)
    ctx.setLineDash([2, 4]); // Dotted line pattern
    const drawnConnections = new Set(); // Track already drawn connections
    
    objects.forEach(obj => {
        const sourceNode = objectNodes.find(n => n.dataset.id == obj.id);
        if (!sourceNode) return;
        
        const sourceX = Math.round(parseFloat(sourceNode.dataset.x));
        const sourceY = Math.round(parseFloat(sourceNode.dataset.y));
        
        obj.connections.forEach(targetId => {
            const targetNode = objectNodes.find(n => n.dataset.id == targetId);
            if (!targetNode) return;
            
            // Create a unique key for this connection (smaller id first to avoid duplicates)
            const connectionKey = obj.id < targetId ? `${obj.id}-${targetId}` : `${targetId}-${obj.id}`;
            
            // Skip if already drawn
            if (drawnConnections.has(connectionKey)) return;
            drawnConnections.add(connectionKey);
            
            const targetX = Math.round(parseFloat(targetNode.dataset.x));
            const targetY = Math.round(parseFloat(targetNode.dataset.y));
            
            // Highlight connected objects' dotted lines in teal if source is hovered
            const isHighlighted = hoveredObjectId && (obj.id == hoveredObjectId || targetId == hoveredObjectId);
            
            ctx.beginPath();
            ctx.moveTo(sourceX, sourceY);
            ctx.lineTo(targetX, targetY);
            ctx.strokeStyle = isHighlighted ? '#22FFC0' : 'rgba(0, 0, 0, 0.8)';
            ctx.lineWidth = isHighlighted ? 2 : 1;
            ctx.stroke();
        });
    });
    
    // Reset line dash for center connections
    ctx.setLineDash([]);
    
    // Draw connections from center to all objects
    objectNodes.forEach(node => {
        const obj = objects.find(o => o.id == node.dataset.id);
        const nodeX = Math.round(parseFloat(node.dataset.x));
        const nodeY = Math.round(parseFloat(node.dataset.y));
        
        // Highlight center-to-object line in purple if object is hovered
        const isHighlighted = hoveredObjectId && obj.id == hoveredObjectId;
        
        ctx.beginPath();
        ctx.moveTo(Math.round(centerX), Math.round(centerY));
        ctx.lineTo(nodeX, nodeY);
        ctx.strokeStyle = isHighlighted ? '#DE22FF' : 'rgba(0, 0, 0, 0.6)';
        ctx.lineWidth = isHighlighted ? 2 : 1;
        ctx.stroke();
    });
}

function updateNodePositions() {
    if (currentView === 'network') {
        networkView();
    } else if (currentView === 'importance') {
        importanceView();
    }
}

function addSimpleDragBehavior(htmlNode) {
    let isDragging = false;
    let startX, startY;
    let initialX, initialY;
    
    htmlNode.addEventListener('mousedown', function(e) {
        if (e.target.closest('.node-label') || e.button !== 0) return; // Ignore right click and label clicks
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialX = parseInt(htmlNode.style.left);
        initialY = parseInt(htmlNode.style.top);
        
        htmlNode.style.cursor = 'grabbing';
        htmlNode.style.zIndex = '1000';
        htmlNode.style.transition = 'none'; // Disable transition during drag
        
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            const newX = initialX + deltaX;
            const newY = initialY + deltaY;
            
            htmlNode.style.left = newX + 'px';
            htmlNode.style.top = newY + 'px';
            
            // Update dataset for connections
            htmlNode.dataset.x = newX;
            htmlNode.dataset.y = newY;
            
            // Redraw connections while dragging
            drawConnections();
        }
    });
    
    document.addEventListener('mouseup', function(e) {
        if (isDragging) {
            isDragging = false;
            
            htmlNode.style.cursor = 'grab';
            htmlNode.style.zIndex = '';
            
            // Add elastic return animation
            htmlNode.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            // Optional: return to original position after a delay
            setTimeout(() => {
                htmlNode.style.left = htmlNode.originalX + 'px';
                htmlNode.style.top = htmlNode.originalY + 'px';
                htmlNode.dataset.x = htmlNode.originalX;
                htmlNode.dataset.y = htmlNode.originalY;
                
                // Redraw connections after return
                setTimeout(() => drawConnections(), 300);
            }, 1000);
        }
    });
    
    // Set initial cursor
    htmlNode.style.cursor = 'grab';
}

function clearActiveButtons() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('active');
    });
}

function showModal(e) {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    const node = e.currentTarget;
    const obj = objects.find(o => o.id == node.dataset.id);
    
    // Set modal content
    document.getElementById('modal-title').textContent = obj.name;
    
    // Format categories and visibility
    const categories = obj.categories ? obj.categories.join(' • ') : '';
    document.getElementById('modal-meta').textContent = 
        `${categories} • Importance: ${obj.importance}/10`;
    
    document.getElementById('modal-desc').textContent = obj.desc;
    document.getElementById('modal-image').style.backgroundImage = `url('${obj.image}')`;
    
    // Set connections
    const connectionsList = document.getElementById('connections-list');
    connectionsList.innerHTML = '';
    
    obj.connections.forEach(connId => {
        const connObj = objects.find(o => o.id === connId);
        if (connObj) {
            const connItem = document.createElement('div');
            connItem.className = 'connection-item';
            connItem.textContent = connObj.name;
            connItem.addEventListener('click', () => {
                closeModal();
                setTimeout(() => {
                    const connNode = objectNodes.find(n => n.dataset.id == connId);
                    if (connNode) connNode.click();
                }, 300);
            });
            connectionsList.appendChild(connItem);
        }
    });
    
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

document.getElementById('overlay').addEventListener('click', closeModal);

function updateStatusPanel(obj, isHovering) {
    const statusPanel = document.querySelector('.status-panel');
    const statusText = document.getElementById('status-text');
    const statusDetails = document.getElementById('status-details');
    
    if (isHovering && obj) {
        // Show panel and object information
        statusPanel.classList.add('visible');
        statusText.textContent = `${obj.name} (Importance: ${obj.importance}/10)`;
        
        // Show connections
        if (obj.connections.length > 0) {
            const connectedNames = obj.connections.map(id => {
                const connectedObj = objects.find(o => o.id === id);
                return connectedObj ? connectedObj.name : 'Unknown';
            });
            statusDetails.textContent = `Connected to: ${connectedNames.join(', ')}`;
            statusDetails.classList.add('visible');
        } else {
            statusDetails.textContent = 'No connections';
            statusDetails.classList.add('visible');
        }
    } else {
        // Hide panel
        statusPanel.classList.remove('visible');
        statusDetails.classList.remove('visible');
        setTimeout(() => {
            if (!statusPanel.classList.contains('visible')) {
                statusText.textContent = '';
                statusDetails.textContent = '';
            }
        }, 300);
    }
}