import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Heart, 
  Star, 
  Camera, 
  Music, 
  Utensils, 
  Home, 
  Sparkles,
  Menu,
  X,
  ChevronRight,
  LayoutDashboard,
  Inbox,
  Calendar,
  Settings,
  Bell,
  User,
  Filter,
  MoreHorizontal,
  Send,
  ArrowLeft,
  MessageSquare,
  Phone,
  Users,
  Check,
  Mail,
  Loader2,
  Image as ImageIcon,
  Plus,
  UploadCloud,
  Film,
  ShoppingCart,
  Trash2,
} from 'lucide-react';

const CATEGORIES = [
  { name: 'Venues', icon: Home },
  { name: 'Photography', icon: Camera },
  { name: 'Catering', icon: Utensils },
  { name: 'Music & DJs', icon: Music },
  { name: 'Decor & Floral', icon: Sparkles },
];

const FEATURED_VENDORS = [
  {
    id: 1,
    name: "Lumina Wedding Photography",
    category: "Photography",
    rating: 4.9,
    reviews: 124,
    priceDisplay: "$2,500 (Avg)",
    numericPrice: 2500,
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    saved: false
  },
  {
    id: 2,
    name: "The Grand Botanical Gardens",
    category: "Venues",
    rating: 4.8,
    reviews: 89,
    priceDisplay: "$8,000 (Avg)",
    numericPrice: 8000,
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
    saved: true
  },
  {
    id: 3,
    name: "Petals & Vines Floral Design",
    category: "Decor & Floral",
    rating: 5.0,
    reviews: 56,
    priceDisplay: "$1,200 (Avg)",
    numericPrice: 1200,
    location: "Jersey City, NJ",
    image: "https://images.unsplash.com/photo-1561058790-2c702a4bfca0?auto=format&fit=crop&w=800&q=80",
    saved: false
  },
  {
    id: 4,
    name: "Golden Crust Catering",
    category: "Catering",
    rating: 4.7,
    reviews: 210,
    priceDisplay: "$4,500 (Avg)",
    numericPrice: 4500,
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    saved: false
  },
  {
    id: 5,
    name: "Radisson Blu Water Garden",
    category: "Venues",
    rating: 4.9,
    reviews: 312,
    priceDisplay: "৳ 1,500,000 (Avg)",
    numericPrice: 12500,
    location: "Dhaka",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    saved: false
  },
  {
    id: 6,
    name: "Dream Weaver Photography",
    category: "Photography",
    rating: 4.8,
    reviews: 145,
    priceDisplay: "৳ 80,000 (Avg)",
    numericPrice: 650,
    location: "Dhaka",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
    saved: false
  },
  {
    id: 7,
    name: "The Peninsula Chittagong",
    category: "Venues",
    rating: 4.7,
    reviews: 189,
    priceDisplay: "৳ 800,000 (Avg)",
    numericPrice: 6800,
    location: "Chittagong",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    saved: false
  },
  {
    id: 8,
    name: "Sonic Beats DJ",
    category: "Music & DJs",
    rating: 4.6,
    reviews: 78,
    priceDisplay: "$800 (Avg)",
    numericPrice: 800,
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    saved: false
  },
  {
    id: 9,
    name: "Spice Route Catering",
    category: "Catering",
    rating: 4.9,
    reviews: 134,
    priceDisplay: "৳ 300,000 (Avg)",
    numericPrice: 2500,
    location: "Dhaka",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    saved: false
  },
  {
    id: 10,
    name: "Acoustic Strings Quartet",
    category: "Music & DJs",
    rating: 4.8,
    reviews: 45,
    priceDisplay: "$1,100 (Avg)",
    numericPrice: 1100,
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
    saved: false
  },
  {
    id: 11,
    name: "Chittagong Decorators",
    category: "Decor & Floral",
    rating: 4.5,
    reviews: 92,
    priceDisplay: "৳ 150,000 (Avg)",
    numericPrice: 1300,
    location: "Chittagong",
    image: "https://images.unsplash.com/photo-1561058790-2c702a4bfca0?auto=format&fit=crop&w=800&q=80",
    saved: false
  },
  {
    id: 12,
    name: "Starlight Event Venue",
    category: "Venues",
    rating: 4.7,
    reviews: 201,
    priceDisplay: "$6,500 (Avg)",
    numericPrice: 6500,
    location: "Jersey City, NJ",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
    saved: false
  },
  {
    id: 13,
    name: "Chittagong Boat Club",
    category: "Venues",
    rating: 4.8,
    reviews: 310,
    priceDisplay: "৳ 450,000 (Avg)",
    numericPrice: 4000,
    location: "Chittagong",
    image: "https://images.unsplash.com/photo-1544124499-58912cb8d8e1?auto=format&fit=crop&w=800&q=80",
    saved: false
  },
  {
    id: 14,
    name: "Matita Chittagong",
    category: "Venues",
    rating: 4.6,
    reviews: 142,
    priceDisplay: "৳ 300,000 (Avg)",
    numericPrice: 2600,
    location: "Chittagong",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    saved: false
  }
];

const INITIAL_CHATS = [
  {
    id: 'chat-1',
    vendorId: 1,
    customerName: 'Sarah & Tom',
    customerEmail: 'sarah@example.com',
    eventDate: 'Oct 12, 2026',
    status: 'new',
    timestamp: '2 hours ago',
    messages: [
      { id: 'm1', sender: 'customer', text: "Hi there! We love your portfolio and were wondering if you're available for our wedding on October 12th. What are your starting packages?", time: '10:30 AM' }
    ]
  },
  {
    id: 'chat-2',
    vendorId: 1,
    customerName: 'Michael & David',
    customerEmail: 'md@example.com',
    eventDate: 'Nov 05, 2026',
    status: 'replied',
    timestamp: '1 day ago',
    messages: [
      { id: 'm1', sender: 'customer', text: "Hello, do you travel for destination weddings?", time: 'Yesterday' },
      { id: 'm2', sender: 'vendor', text: "Hi Michael and David! Yes, we absolutely do travel. Where are you planning to tie the knot?", time: 'Yesterday' }
    ]
  }
];

const INITIAL_ALBUMS = [
  { id: 'a1', title: 'Summer Weddings 2025', cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80', count: 24 },
  { id: 'a2', title: 'Engagement Shoots', cover: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80', count: 12 },
  { id: 'a3', title: 'Venue Details', cover: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80', count: 45 },
];

const INITIAL_MEDIA = [
  { id: 'm1', albumId: 'a1', type: 'image', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
  { id: 'm2', albumId: 'a1', type: 'image', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80' },
  { id: 'm3', albumId: 'a1', type: 'video', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80' },
  { id: 'm4', albumId: 'a1', type: 'image', url: 'https://images.unsplash.com/photo-1561058790-2c702a4bfca0?auto=format&fit=crop&w=800&q=80' },
];
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [vendors, setVendors] = useState(FEATURED_VENDORS);
  const [currentView, setCurrentView] = useState('home');
  const [dashboardView, setDashboardView] = useState('overview');
  const [emailInput, setEmailInput] = useState('');
  const [vendorAccount, setVendorAccount] = useState(null);

  const [vendorAuthMode, setVendorAuthMode] = useState('signin');
  const [signupForm, setSignupForm] = useState({ businessName: '', email: '', phone: '', password: '' });
  const [isVerifying, setIsVerifying] = useState(false);

  const [chats, setChats] = useState(INITIAL_CHATS);
  const [activeChatId, setActiveChatId] = useState(null);
  const [contactModal, setContactModal] = useState({ isOpen: false, vendor: null });
  const [messageInput, setMessageInput] = useState('');
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', date: '', message: '' });

  const [selectedDate, setSelectedDate] = useState(null);
  const [isEventSidebarOpen, setIsEventSidebarOpen] = useState(false);
  const [events, setEvents] = useState([
    { date: '2026-10-12', customerName: 'Sarah & Tom', phone: '(555) 123-4567', typeOfEvent: 'Wedding Ceremony & Reception', venue: 'The Grand Botanical Gardens', assignedStaff: 'Mike (Lead), Jane (Assistant)' }
  ]);
  const [eventForm, setEventForm] = useState({ customerName: '', phone: '', typeOfEvent: '', venue: '', assignedStaff: '' });

  const [albums, setAlbums] = useState(INITIAL_ALBUMS);
  const [media, setMedia] = useState(INITIAL_MEDIA);
  const [activeAlbumId, setActiveAlbumId] = useState(null);

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Venues');

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleSave = (id) => {
    setVendors(vendors.map(vendor => 
      vendor.id === id ? { ...vendor, saved: !vendor.saved } : vendor
    ));
  };

  const handleAddToCart = (vendor) => {
    if (!cart.find(v => v.id === vendor.id)) {
      setCart([...cart, vendor]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(v => v.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.numericPrice, 0);

  const handleVendorSubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      const simulatedName = emailInput.split('@')[0].replace(/[^a-zA-Z0-9]/g, ' ');
      setVendorAccount({ 
        email: emailInput, 
        name: simulatedName.charAt(0).toUpperCase() + simulatedName.slice(1) 
      });
      setCurrentView('vendor-dashboard');
      setDashboardView('overview');
    }
  };

  const handleVendorSignup = async (e) => {
    e.preventDefault();
    setIsVerifying(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsVerifying(false);
    setVendorAuthMode('verify');
  };

  const handleSendInquiry = (e) => {
    e.preventDefault();
    const newChat = {
      id: `chat-${Date.now()}`,
      vendorId: contactModal.vendor.id,
      customerName: inquiryForm.name,
      customerEmail: inquiryForm.email,
      eventDate: inquiryForm.date,
      status: 'new',
      timestamp: 'Just now',
      messages: [
        { id: `m-${Date.now()}`, sender: 'customer', text: inquiryForm.message, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
      ]
    };
    setChats([newChat, ...chats]);
    setContactModal({ isOpen: false, vendor: null });
    setInquiryForm({ name: '', email: '', date: '', message: '' });
    alert("Message sent to vendor successfully!");
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    setChats(chats.map(chat => {
      if (chat.id === activeChatId) {
        return {
          ...chat,
          status: 'replied',
          messages: [
            ...chat.messages, 
            { id: `m-${Date.now()}`, sender: 'vendor', text: messageInput, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
          ]
        };
      }
      return chat;
    }));
    setMessageInput('');
  };

  const activeChat = chats.find(c => c.id === activeChatId);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const handleDateClick = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dateStr);
    const existingEvent = events.find(e => e.date === dateStr);
    if (existingEvent) {
      setEventForm(existingEvent);
    } else {
      setEventForm({ customerName: '', phone: '', typeOfEvent: '', venue: '', assignedStaff: '' });
    }
    setIsEventSidebarOpen(true);
  };

  const handleSaveEvent = (e) => {
    e.preventDefault();
    const existingEventIndex = events.findIndex(e => e.date === selectedDate);
    const newEvent = { ...eventForm, date: selectedDate };

    if (existingEventIndex >= 0) {
      const updatedEvents = [...events];
      updatedEvents[existingEventIndex] = newEvent;
      setEvents(updatedEvents);
    } else {
      setEvents([...events, newEvent]);
    }
    setIsEventSidebarOpen(false);
  };

  const filteredVendors = vendors.filter(vendor => 
    (selectedCity === 'All' || vendor.location.includes(selectedCity)) &&
    (selectedCategory === 'All' || vendor.category === selectedCategory)
  );
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      
      {isCartOpen && (
        <div className="fixed inset-0 z-[110] flex justify-end">
          <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="w-full max-w-md bg-white h-full shadow-2xl relative flex flex-col animate-in slide-in-from-right-full duration-300">
            <div className="px-6 py-5 border-b border-stone-200 flex justify-between items-center bg-stone-50 shrink-0">
              <h3 className="text-xl font-serif text-stone-900 flex items-center">
                <ShoppingCart size={20} className="mr-2" /> Your Wedding Cart
              </h3>
              <button onClick={() => setIsCartOpen(false)} className="text-stone-400 hover:text-stone-600">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart size={24} className="text-stone-300" />
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 mb-2">Your cart is empty</h4>
                  <p className="text-stone-500">Start adding vendors to build your dream wedding package.</p>
                  <button onClick={() => setIsCartOpen(false)} className="mt-6 text-rose-600 font-medium hover:text-rose-700">Continue Shopping</button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 border border-stone-200 rounded-xl bg-white shadow-sm">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg shrink-0" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-stone-900 text-sm line-clamp-1">{item.name}</h4>
                          <button onClick={() => handleRemoveFromCart(item.id)} className="text-stone-400 hover:text-red-500 transition-colors ml-2">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider font-semibold">{item.category}</p>
                        <p className="text-sm font-medium text-stone-900 mt-2">{item.priceDisplay}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-stone-200 bg-stone-50 shrink-0">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-stone-600 font-medium">Estimated Total (USD Base)</span>
                  <span className="text-xl font-bold text-stone-900">${cartTotal.toLocaleString()}</span>
                </div>
                <button className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3.5 rounded-xl font-medium transition-colors shadow-sm flex items-center justify-center">
                  Request Booking Quotes
                </button>
                <p className="text-xs text-center text-stone-500 mt-3">Prices are estimates based on average packages.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {contactModal.isOpen && (
        <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-stone-200 flex justify-between items-center bg-stone-50">
              <h3 className="text-xl font-serif text-stone-900">Contact {contactModal.vendor?.name}</h3>
              <button onClick={() => setContactModal({ isOpen: false, vendor: null })} className="text-stone-400 hover:text-stone-600">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSendInquiry} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Your Name</label>
                  <input required type="text" value={inquiryForm.name} onChange={e => setInquiryForm({...inquiryForm, name: e.target.value})} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none" placeholder="Sarah & Tom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                  <input required type="email" value={inquiryForm.email} onChange={e => setInquiryForm({...inquiryForm, email: e.target.value})} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Event Date (Optional)</label>
                <input type="date" value={inquiryForm.date} onChange={e => setInquiryForm({...inquiryForm, date: e.target.value})} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea required rows={4} value={inquiryForm.message} onChange={e => setInquiryForm({...inquiryForm, message: e.target.value})} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none" placeholder="Hi! We love your work and would like to know..."></textarea>
              </div>
              <button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition-colors shadow-sm flex items-center justify-center">
                <Send size={18} className="mr-2" /> Send Inquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {currentView !== 'vendor-dashboard' && (
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => setCurrentView('home')}
            >
              <span className="font-serif text-2xl text-stone-900 tracking-tight">
                Aisle<span className="text-rose-500 italic">Connect</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" onClick={() => { setSelectedCity('All'); setSelectedCategory('All'); setCurrentView('search-results'); }} className="text-stone-600 hover:text-stone-900 font-medium transition-colors">Vendors</a>
              <a href="#" className="text-stone-600 hover:text-stone-900 font-medium transition-colors">Real Weddings</a>
              <a href="#" className="text-stone-600 hover:text-stone-900 font-medium transition-colors">Planning Tools</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors"
              >
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                    {cart.length}
                  </span>
                )}
              </button>
              <div className="h-6 w-px bg-stone-300 mx-1"></div>
              <button className="text-stone-600 hover:text-stone-900 font-medium px-3 py-2">
                Log in
              </button>
              <button className="bg-stone-900 hover:bg-stone-800 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm">
                Sign up free
              </button>
              <div className="h-6 w-px bg-stone-300 mx-2"></div>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentView('vendor-signin'); setVendorAuthMode('signin'); }}
                className="text-rose-600 hover:text-rose-700 font-medium text-sm"
              >
                Are you a vendor?
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-600 hover:text-stone-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#" onClick={() => { setSelectedCity('All'); setSelectedCategory('All'); setCurrentView('search-results'); setIsMenuOpen(false); }} className="block px-3 py-3 text-base font-medium text-stone-800 hover:bg-stone-50 rounded-md">Vendors</a>
              <a href="#" className="block px-3 py-3 text-base font-medium text-stone-800 hover:bg-stone-50 rounded-md">Real Weddings</a>
              <a href="#" className="block px-3 py-3 text-base font-medium text-stone-800 hover:bg-stone-50 rounded-md">Planning Tools</a>
              <div className="mt-4 pt-4 border-t border-stone-100">
                <button 
                  onClick={() => { setCurrentView('vendor-signin'); setVendorAuthMode('signin'); setIsMenuOpen(false); }}
                  className="w-full text-center bg-rose-50 text-rose-600 px-4 py-3 rounded-md font-medium mb-3 hover:bg-rose-100 transition-colors"
                >
                  Vendor Sign In
                </button>
                <button className="w-full text-center bg-stone-900 text-white px-4 py-3 rounded-full font-medium mb-3">
                  Sign up free
                </button>
                <button className="w-full text-center text-stone-600 font-medium py-2">
                  Log in
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      )}
      {currentView === 'home' && (
        <>
          <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=2070&q=80" 
                alt="Wedding Ceremony" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white mb-6 drop-shadow-lg">
                Plan the wedding <br className="hidden sm:block" /> of your dreams
              </h1>
              <p className="text-lg sm:text-xl text-stone-100 mb-8 max-w-2xl mx-auto drop-shadow-md font-light">
                Discover and book the best local vendors, manage your budget, and bring your vision to life—all in one place.
              </p>

              <div className="max-w-4xl mx-auto bg-white rounded-full shadow-2xl p-2 flex flex-col sm:flex-row items-center">
                <div className="flex-1 flex items-center px-4 py-3 w-full sm:w-auto border-b sm:border-b-0 sm:border-r border-stone-200">
                  <Search className="text-stone-400 mr-3" size={20} />
                  <input 
                    type="text" 
                    placeholder="What are you looking for? (e.g. Venue, DJ)" 
                    className="w-full outline-none text-stone-800 placeholder-stone-400 bg-transparent"
                  />
                </div>
                <div className="flex-1 flex items-center px-4 py-3 w-full sm:w-auto mt-2 sm:mt-0">
                  <MapPin className="text-stone-400 mr-3" size={20} />
                  <input 
                    type="text" 
                    placeholder="Zip code or City" 
                    className="w-full outline-none text-stone-800 placeholder-stone-400 bg-transparent"
                  />
                </div>
                <button 
                  onClick={() => { setSelectedCity('All'); setSelectedCategory('All'); setCurrentView('search-results'); }}
                  className="w-full sm:w-auto mt-2 sm:mt-0 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-md"
                >
                  Search
                </button>
              </div>

              <div className="mt-12">
                <p className="text-xs sm:text-sm font-bold text-white/80 uppercase tracking-widest mb-4 drop-shadow-md">Cities We Operate In</p>
                <div className="flex flex-wrap justify-center items-center gap-3">
                  <span 
                    onClick={() => { setSelectedCity('Dhaka'); setSelectedCategory('Venues'); setCurrentView('search-results'); }}
                    className="px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30 shadow-sm hover:bg-white/30 transition-colors cursor-pointer flex items-center"
                  >
                    <MapPin size={14} className="mr-1.5 opacity-80" /> Dhaka
                  </span>
                  <span 
                    onClick={() => { setSelectedCity('Chittagong'); setSelectedCategory('Venues'); setCurrentView('search-results'); }}
                    className="px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30 shadow-sm hover:bg-white/30 transition-colors cursor-pointer flex items-center"
                  >
                    <MapPin size={14} className="mr-1.5 opacity-80" /> Chittagong
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-serif text-stone-900">Browse by Category</h2>
                <p className="text-stone-500 mt-2">Find exactly what you need for your special day.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {CATEGORIES.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <div 
                    key={index}
                    onClick={() => { setSelectedCity('All'); setSelectedCategory(cat.name); setCurrentView('search-results'); }}
                    className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md hover:border-rose-100 transition-all cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-4 group-hover:bg-rose-50 transition-colors">
                      <Icon className="text-stone-600 group-hover:text-rose-500 transition-colors" size={28} />
                    </div>
                    <span className="font-medium text-stone-800 group-hover:text-rose-600 transition-colors">{cat.name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-stone-100/50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-3xl font-serif text-stone-900">Highly Rated Near You</h2>
                  <p className="text-stone-500 mt-2">Couples love these professionals.</p>
                </div>
                <a href="#" onClick={(e) => { e.preventDefault(); setSelectedCity('All'); setSelectedCategory('All'); setCurrentView('search-results'); }} className="hidden sm:flex items-center text-rose-600 font-medium hover:text-rose-700">
                  View all <ChevronRight size={20} className="ml-1" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {vendors.slice(0, 4).map((vendor) => (
                  <div key={vendor.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col">
                    <div className="relative h-60 overflow-hidden shrink-0">
                      <img 
                        src={vendor.image} 
                        alt={vendor.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button 
                        onClick={() => toggleSave(vendor.id)}
                        className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors z-10"
                      >
                        <Heart 
                          size={20} 
                          className={vendor.saved ? "fill-rose-500 text-rose-500" : "text-stone-400"} 
                        />
                      </button>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-stone-700 shadow-sm">
                        {vendor.category}
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-stone-900 leading-tight group-hover:text-rose-600 transition-colors line-clamp-1">
                            {vendor.name}
                          </h3>
                        </div>
                        
                        <div className="flex items-center text-sm text-stone-500 mb-4">
                          <MapPin size={14} className="mr-1.5" />
                          {vendor.location}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                          <div className="flex items-center">
                            <Star size={16} className="fill-amber-400 text-amber-400 mr-1" />
                            <span className="font-semibold text-stone-900">{vendor.rating}</span>
                            <span className="text-stone-400 text-sm ml-1">({vendor.reviews})</span>
                          </div>
                          <div className="font-medium text-stone-900">
                            {vendor.priceDisplay}
                          </div>
                        </div>
                        
                        <div className="flex space-x-2 mt-4">
                          <button 
                            onClick={() => handleAddToCart(vendor)}
                            className={`flex-1 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center text-xs ${cart.find(v => v.id === vendor.id) ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-stone-900 hover:bg-stone-800 text-white shadow-sm'}`}
                          >
                            <ShoppingCart size={14} className="mr-1.5" /> 
                            {cart.find(v => v.id === vendor.id) ? 'Added' : 'Add to Cart'}
                          </button>
                          <button 
                            onClick={() => setContactModal({ isOpen: true, vendor: vendor })}
                            className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-900 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center text-xs"
                          >
                            <MessageSquare size={14} className="mr-1.5" /> Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => { setSelectedCity('All'); setSelectedCategory('All'); setCurrentView('search-results'); }}
                className="sm:hidden w-full mt-8 bg-white border border-stone-200 text-stone-800 px-6 py-3 rounded-full font-medium shadow-sm"
              >
                View all vendors
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Why plan with AisleConnect?</h2>
              <p className="text-lg text-stone-500">We replace spreadsheets and endless email threads with smart tools and direct vendor access.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-rose-100 rounded-2xl flex items-center justify-center mb-6">
                  <Search className="text-rose-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Discover the Best</h3>
                <p className="text-stone-500 leading-relaxed">Browse thousands of verified vendors, read real reviews, and find the perfect match for your style and budget.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Stay Organized</h3>
                <p className="text-stone-500 leading-relaxed">Keep track of your checklist, manage your guest list, and track your budget all in one beautiful dashboard.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="text-amber-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Book with Confidence</h3>
                <p className="text-stone-500 leading-relaxed">Communicate directly with vendors, review contracts, and make secure payments through our platform.</p>
              </div>
            </div>
          </div>

          <div className="bg-stone-900 text-white py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">Ready to start planning?</h2>
              <p className="text-stone-300 text-lg mb-10">Join thousands of couples who planned their perfect day with us.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors">
                  Sign up free
                </button>
                <button 
                  onClick={() => { setCurrentView('vendor-signin'); setVendorAuthMode('signin'); }}
                  className="bg-transparent border border-stone-600 hover:border-white text-white px-8 py-4 rounded-full font-medium text-lg transition-colors"
                >
                  I am a vendor
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {currentView === 'search-results' && (
        <div className="pt-28 pb-20 min-h-screen bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
            
            <div className="w-full md:w-64 shrink-0">
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm sticky top-28">
                <div className="flex items-center mb-4 pb-4 border-b border-stone-100">
                  <Filter size={18} className="text-stone-500 mr-2" />
                  <h3 className="font-serif text-lg text-stone-900">Filters</h3>
                </div>
                
                <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-3">Categories</h4>
                <div className="space-y-2">
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center ${selectedCategory === 'All' ? 'bg-rose-50 text-rose-600' : 'text-stone-600 hover:bg-stone-50'}`}
                  >
                    All Vendors
                  </button>
                  {CATEGORIES.map((cat, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center ${selectedCategory === cat.name ? 'bg-rose-50 text-rose-600' : 'text-stone-600 hover:bg-stone-50'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mt-6 mb-3">City</h4>
                <select 
                  value={selectedCity} 
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-700 outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="All">All Cities</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="New York">New York</option>
                </select>
              </div>
            </div>

            <div className="flex-1">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-serif text-stone-900">
                    {selectedCategory === 'All' ? 'All Professionals' : selectedCategory} 
                    {selectedCity !== 'All' && ` in ${selectedCity}`}
                  </h2>
                  <p className="text-stone-500 mt-1">Showing {filteredVendors.length} result(s)</p>
                </div>
              </div>

              {filteredVendors.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-stone-200 shadow-sm">
                  <Search size={32} className="mx-auto text-stone-300 mb-4" />
                  <h3 className="text-xl font-serif text-stone-900 mb-2">No vendors found</h3>
                  <p className="text-stone-500">Try adjusting your filters or searching in a different city.</p>
                  <button 
                    onClick={() => { setSelectedCity('All'); setSelectedCategory('All'); }}
                    className="mt-6 px-6 py-2.5 bg-rose-50 text-rose-600 font-medium rounded-full hover:bg-rose-100 transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVendors.map((vendor) => (
                    <div key={vendor.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col">
                      <div className="relative h-48 overflow-hidden shrink-0">
                        <img 
                          src={vendor.image} 
                          alt={vendor.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <button 
                          onClick={() => toggleSave(vendor.id)}
                          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors z-10"
                        >
                          <Heart 
                            size={18} 
                            className={vendor.saved ? "fill-rose-500 text-rose-500" : "text-stone-400"} 
                          />
                        </button>
                        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-stone-700 uppercase tracking-wider shadow-sm">
                          {vendor.category}
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-stone-900 leading-tight group-hover:text-rose-600 transition-colors line-clamp-1 mb-1.5">
                            {vendor.name}
                          </h3>
                          
                          <div className="flex items-center text-xs text-stone-500 mb-3">
                            <MapPin size={12} className="mr-1" />
                            {vendor.location}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                            <div className="flex items-center">
                              <Star size={14} className="fill-amber-400 text-amber-400 mr-1" />
                              <span className="font-semibold text-sm text-stone-900">{vendor.rating}</span>
                              <span className="text-stone-400 text-xs ml-1">({vendor.reviews})</span>
                            </div>
                            <div className="font-medium text-sm text-stone-900">
                              {vendor.priceDisplay}
                            </div>
                          </div>
                          
                          <div className="flex space-x-2 mt-3">
                            <button 
                              onClick={() => handleAddToCart(vendor)}
                              className={`flex-1 py-2 rounded-lg font-medium transition-colors flex items-center justify-center text-xs ${cart.find(v => v.id === vendor.id) ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-stone-900 hover:bg-stone-800 text-white shadow-sm'}`}
                            >
                              <ShoppingCart size={14} className="mr-1.5" /> 
                              {cart.find(v => v.id === vendor.id) ? 'Added' : 'Add to Cart'}
                            </button>
                            <button 
                              onClick={() => setContactModal({ isOpen: true, vendor: vendor })}
                              className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-900 py-2 rounded-lg font-medium transition-colors flex items-center justify-center text-xs"
                            >
                              <MessageSquare size={14} className="mr-1.5" /> Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {currentView === 'vendor-signin' && (
        <div className="pt-28 pb-20 min-h-screen flex items-center justify-center bg-stone-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-stone-100">
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80" 
                alt="Vendor working" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/40 flex items-center justify-center p-8">
                <h2 className="text-3xl font-serif text-white text-center drop-shadow-lg">Grow your wedding business.</h2>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              {vendorAuthMode === 'signin' && (
                <>
                  <h3 className="text-2xl font-serif text-stone-900 mb-2">Vendor Portal</h3>
                  <p className="text-stone-500 mb-8">Sign in to manage your storefront and leads.</p>

                  <form className="space-y-5" onSubmit={handleVendorSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Email address</label>
                      <input 
                        type="email" 
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" 
                        placeholder="hello@yourbusiness.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Password</label>
                      <input type="password" required className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" placeholder="••••••••" />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-stone-300 text-rose-600 focus:ring-rose-500 w-4 h-4" />
                        <span className="ml-2 text-sm text-stone-600">Remember me</span>
                      </label>
                      <a href="#" className="text-sm font-medium text-rose-600 hover:text-rose-500">Forgot password?</a>
                    </div>
                    <button className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3.5 rounded-lg font-medium transition-colors mt-2 shadow-sm">
                      Sign in to Dashboard
                    </button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-stone-100 text-center text-sm text-stone-600">
                    Don&apos;t have a vendor account? 
                    <button 
                      onClick={() => setVendorAuthMode('signup')}
                      className="font-medium text-rose-600 hover:text-rose-500 ml-1"
                    >
                      Apply to join
                    </button>
                  </div>
                </>
              )}

              {vendorAuthMode === 'signup' && (
                <>
                  <h3 className="text-2xl font-serif text-stone-900 mb-2">Partner with Us</h3>
                  <p className="text-stone-500 mb-6">Create your vendor account to reach more couples.</p>

                  <form className="space-y-4" onSubmit={handleVendorSignup}>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Business Name</label>
                      <input 
                        type="text" 
                        required
                        value={signupForm.businessName}
                        onChange={(e) => setSignupForm({...signupForm, businessName: e.target.value})}
                        className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" 
                        placeholder="Lumina Photography" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Email address</label>
                      <input 
                        type="email" 
                        required
                        value={signupForm.email}
                        onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                        className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" 
                        placeholder="hello@yourbusiness.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number (For SMS Verification)</label>
                      <input 
                        type="tel" 
                        required
                        value={signupForm.phone}
                        onChange={(e) => setSignupForm({...signupForm, phone: e.target.value})}
                        className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" 
                        placeholder="(555) 000-0000" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Create Password</label>
                      <input type="password" required className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all" placeholder="••••••••" />
                    </div>
                    <button 
                      type="submit" 
                      disabled={isVerifying}
                      className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3.5 rounded-lg font-medium transition-colors mt-4 shadow-sm flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isVerifying ? (
                        <><Loader2 size={18} className="animate-spin mr-2" /> Sending Verification...</>
                      ) : (
                        'Create Account'
                      )}
                    </button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-stone-100 text-center text-sm text-stone-600">
                    Already have an account? 
                    <button 
                      onClick={() => setVendorAuthMode('signin')}
                      className="font-medium text-rose-600 hover:text-rose-500 ml-1"
                    >
                      Sign in
                    </button>
                  </div>
                </>
              )}

              {vendorAuthMode === 'verify' && (
                <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail size={32} className="text-rose-500" />
                  </div>
                  <h3 className="text-2xl font-serif text-stone-900 mb-3">Verify your account</h3>
                  <p className="text-stone-500 mb-8 leading-relaxed">
                    We&apos;ve sent a secure verification link to <br/>
                    <strong className="text-stone-800">{signupForm.email}</strong>. <br/>
                    Please check your inbox to activate your storefront.
                  </p>
                  
                  <button 
                    onClick={() => {
                      setVendorAuthMode('signin');
                      setEmailInput(signupForm.email);
                    }}
                    className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3.5 rounded-lg font-medium transition-colors shadow-sm"
                  >
                    Return to Sign In
                  </button>
                  
                  <div className="mt-6 text-sm text-stone-500">
                    Didn&apos;t receive the email? <button className="font-medium text-rose-600 hover:text-rose-500 ml-1">Click to resend</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {currentView === 'vendor-dashboard' && (
        <div className="flex h-screen overflow-hidden bg-stone-50 w-full text-left">
          <div className="w-64 bg-white border-r border-stone-200 flex flex-col z-10 hidden md:flex">
            <div className="h-20 flex items-center px-6 border-b border-stone-200 cursor-pointer" onClick={() => setCurrentView('home')}>
              <span className="font-serif text-2xl text-stone-900 tracking-tight">
                Aisle<span className="text-rose-500 italic">Connect</span>
              </span>
              <span className="ml-2 px-1.5 py-0.5 bg-stone-100 text-stone-600 text-[10px] font-bold tracking-wider rounded">PRO</span>
            </div>
            <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
              <button 
                onClick={() => {setDashboardView('overview'); setActiveChatId(null);}}
                className={`w-full flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors ${dashboardView === 'overview' ? 'bg-rose-50 text-rose-600' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}
              >
                <LayoutDashboard size={20} className="mr-3" /> Dashboard
              </button>
              <button 
                onClick={() => {setDashboardView('inquiries'); setActiveChatId(null);}}
                className={`w-full flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors ${dashboardView === 'inquiries' ? 'bg-rose-50 text-rose-600' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}
              >
                <Inbox size={20} className="mr-3" /> Inquiries 
                {chats.filter(c => c.status === 'new').length > 0 && (
                  <span className="ml-auto bg-rose-100 text-rose-600 py-0.5 px-2 rounded-full text-xs">
                    {chats.filter(c => c.status === 'new').length}
                  </span>
                )}
              </button>
              <button 
                onClick={() => {setDashboardView('calendar'); setActiveChatId(null);}}
                className={`w-full flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors ${dashboardView === 'calendar' ? 'bg-rose-50 text-rose-600' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}
              >
                <Calendar size={20} className="mr-3" /> Calendar
              </button>
              <button 
                onClick={() => {setDashboardView('portfolio'); setActiveAlbumId(null);}}
                className={`w-full flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors ${dashboardView === 'portfolio' ? 'bg-rose-50 text-rose-600' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}
              >
                <ImageIcon size={20} className="mr-3" /> Portfolio
              </button>
              <button 
                onClick={() => setDashboardView('storefront')}
                className={`w-full flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors ${dashboardView === 'storefront' ? 'bg-rose-50 text-rose-600' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}
              >
                <User size={20} className="mr-3" /> Storefront
              </button>
            </div>
            <div className="p-4 border-t border-stone-200">
              <a href="#" className="flex items-center px-3 py-2.5 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg font-medium transition-colors">
                <Settings size={20} className="mr-3" /> Settings
              </a>
              <div className="mt-4 flex items-center px-3">
                <div className="w-9 h-9 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold uppercase text-sm flex-shrink-0">
                  {vendorAccount?.name?.charAt(0) || 'V'}
                </div>
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-stone-900 truncate">{vendorAccount?.name || 'Vendor'}</p>
                  <p className="text-xs text-stone-500 truncate">{vendorAccount?.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col h-full overflow-hidden relative">
            <header className="h-20 bg-white border-b border-stone-200 flex items-center justify-between px-4 sm:px-8 shrink-0">
              <div className="flex items-center">
                <button className="md:hidden mr-4 text-stone-500" onClick={() => setCurrentView('home')}>
                   <ChevronRight className="rotate-180" size={24} />
                </button>
                <h1 className="text-xl sm:text-2xl font-serif text-stone-900 truncate">
                  {dashboardView === 'overview' && `Welcome back, ${vendorAccount?.name || 'Vendor'}`}
                  {dashboardView === 'inquiries' && 'Inquiries & Leads'}
                  {dashboardView === 'calendar' && 'Calendar & Bookings'}
                  {dashboardView === 'portfolio' && 'Portfolio & Albums'}
                  {dashboardView === 'storefront' && 'Manage Storefront'}
                </h1>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <button className="text-stone-400 hover:text-stone-600 relative">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                </button>
                <button 
                  onClick={() => setDashboardView('storefront')}
                  className="hidden sm:block bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
                >
                  Edit Storefront
                </button>
              </div>
            </header>
            
            <main className="flex-1 overflow-y-auto p-4 sm:p-8">
              
              {dashboardView === 'overview' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
                      <p className="text-sm font-medium text-stone-500 mb-1">New Inquiries</p>
                      <p className="text-3xl font-bold text-stone-900">{chats.filter(c => c.status === 'new').length}</p>
                      <p className="text-xs text-emerald-600 mt-2 font-medium">Updated just now</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
                      <p className="text-sm font-medium text-stone-500 mb-1">Profile Views</p>
                      <p className="text-3xl font-bold text-stone-900">148</p>
                      <p className="text-xs text-emerald-600 mt-2 font-medium">+12% from last week</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
                      <p className="text-sm font-medium text-stone-500 mb-1">Upcoming Bookings</p>
                      <p className="text-3xl font-bold text-stone-900">12</p>
                      <p className="text-xs text-stone-500 mt-2 font-medium">Next event in 4 days</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
                    <div className="px-4 sm:px-6 py-5 border-b border-stone-200 flex justify-between items-center">
                      <h2 className="text-lg font-serif text-stone-900">Recent Inquiries</h2>
                    </div>
                    <div className="divide-y divide-stone-100">
                      {chats.slice(0, 3).map((chat) => (
                        <div key={chat.id} onClick={() => {setDashboardView('inquiries'); setActiveChatId(chat.id);}} className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center hover:bg-stone-50 transition-colors cursor-pointer gap-4 sm:gap-0">
                          <div className="flex items-center flex-1">
                            <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm mr-4 shrink-0">
                              {chat.customerName.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-stone-900">{chat.customerName}</p>
                              <p className="text-xs text-stone-500 mt-0.5">Requested date: {chat.eventDate || 'TBD'}</p>
                            </div>
                          </div>
                          <div className="sm:text-right flex items-center justify-between sm:block ml-14 sm:ml-0">
                            {chat.status === 'new' ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-200">
                                Pending Response
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
                                Replied
                              </span>
                            )}
                            <p className="text-xs text-stone-400 sm:mt-1.5">{chat.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-6 py-4 border-t border-stone-200 bg-stone-50 text-center">
                      <button onClick={() => setDashboardView('inquiries')} className="text-sm font-medium text-rose-600 hover:text-rose-700">View all inquiries</button>
                    </div>
                  </div>
                </>
              )}

              {dashboardView === 'inquiries' && !activeChatId && (
                <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden min-h-full flex flex-col">
                  <div className="px-4 sm:px-6 py-5 border-b border-stone-200 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium">All ({chats.length})</button>
                      <button className="px-4 py-2 bg-stone-50 text-stone-600 hover:bg-stone-100 rounded-lg text-sm font-medium transition-colors">Unread ({chats.filter(c => c.status === 'new').length})</button>
                      <button className="px-4 py-2 bg-stone-50 text-stone-600 hover:bg-stone-100 rounded-lg text-sm font-medium transition-colors">Archived</button>
                    </div>
                    <button className="flex items-center text-stone-500 hover:text-stone-900 px-3 py-2 border border-stone-200 rounded-lg text-sm font-medium">
                      <Filter size={16} className="mr-2" /> Filter
                    </button>
                  </div>
                  
                  <div className="divide-y divide-stone-100 flex-1">
                    {chats.map((chat) => (
                      <div key={chat.id} onClick={() => setActiveChatId(chat.id)} className="px-4 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center hover:bg-stone-50 transition-colors cursor-pointer gap-4">
                        <div className="flex items-center flex-1">
                          <div className={`w-2 h-2 rounded-full mr-4 ${chat.status === 'new' ? 'bg-rose-500' : 'bg-transparent'}`}></div>
                          <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center font-bold text-sm mr-4 shrink-0">
                            {chat.customerName.charAt(0)}
                          </div>
                          <div>
                            <p className={`text-sm ${chat.status === 'new' ? 'font-bold text-stone-900' : 'font-medium text-stone-700'}`}>
                              {chat.customerName}
                            </p>
                            <p className="text-sm text-stone-500 mt-0.5 line-clamp-1">{chat.messages[chat.messages.length - 1]?.text ?? ''}</p>
                          </div>
                        </div>
                        <div className="sm:text-right flex items-center justify-between sm:block ml-20 sm:ml-0 shrink-0">
                          <p className="text-sm text-stone-900 font-medium">{chat.eventDate || 'TBD'}</p>
                          <div className="flex items-center space-x-3 mt-1.5">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${chat.status === 'new' ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'}`}>
                              {chat.status === 'new' ? 'New' : 'Replied'}
                            </span>
                            <button className="text-stone-400 hover:text-stone-900"><MoreHorizontal size={18} /></button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {dashboardView === 'inquiries' && activeChatId && activeChat && (
                <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden min-h-[600px] max-h-[70vh] flex flex-col">
                  <div className="px-4 sm:px-6 py-4 border-b border-stone-200 flex items-center bg-stone-50 shrink-0">
                    <button onClick={() => setActiveChatId(null)} className="mr-4 text-stone-500 hover:text-stone-900">
                      <ArrowLeft size={20} />
                    </button>
                    <div className="w-10 h-10 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center font-bold text-sm mr-3">
                      {activeChat.customerName.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-stone-900">{activeChat.customerName}</h3>
                      <p className="text-xs text-stone-500">{activeChat.customerEmail} • Event: {activeChat.eventDate || 'TBD'}</p>
                    </div>
                    <button className="px-3 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-md text-xs font-medium transition-colors">
                      View Profile
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-white">
                    {activeChat.messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.sender === 'vendor' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.sender === 'vendor' ? 'bg-rose-500 text-white rounded-br-none' : 'bg-stone-100 text-stone-900 rounded-bl-none'}`}>
                          <p className="text-sm leading-relaxed">{msg.text}</p>
                          <p className={`text-[10px] mt-1 text-right ${msg.sender === 'vendor' ? 'text-rose-100' : 'text-stone-400'}`}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="px-4 sm:px-6 py-4 border-t border-stone-200 bg-stone-50 shrink-0">
                    <form onSubmit={handleSendMessage} className="flex space-x-3">
                      <input 
                        type="text" 
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type your message..." 
                        className="flex-1 px-4 py-2.5 border border-stone-300 rounded-full focus:ring-2 focus:ring-rose-500 outline-none"
                      />
                      <button 
                        type="submit" 
                        disabled={!messageInput.trim()}
                        className="w-11 h-11 rounded-full bg-stone-900 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-stone-800 transition-colors shrink-0"
                      >
                        <Send size={18} />
                      </button>
                    </form>
                  </div>
                </div>
              )}
              {dashboardView === 'calendar' && (
                <div className="flex flex-col lg:flex-row gap-6 min-h-[600px] h-[calc(100vh-140px)]">
                  <div className="flex-1 bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-4 sm:p-6 border-b border-stone-200 flex justify-between items-center bg-stone-50 shrink-0">
                      <h2 className="text-xl font-serif text-stone-900">{monthNames[currentMonth]} {currentYear}</h2>
                      <div className="flex space-x-2">
                        <button className="p-2 border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors bg-white"><ChevronRight className="rotate-180" size={16}/></button>
                        <button className="p-2 border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors bg-white"><ChevronRight size={16}/></button>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                          <div key={day} className="text-center text-[10px] sm:text-xs font-semibold text-stone-500 uppercase tracking-wider py-2">
                            {day}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1 sm:gap-2">
                        {Array.from({ length: firstDayIndex }).map((_, i) => (
                          <div key={`empty-${i}`} className="aspect-square rounded-lg opacity-50 bg-stone-50"></div>
                        ))}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const day = i + 1;
                          const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                          const hasEvent = events.some(e => e.date === dateStr);
                          const isSelected = selectedDate === dateStr;

                          return (
                            <div 
                              key={day} 
                              onClick={() => handleDateClick(day)}
                              className={`aspect-square p-1 sm:p-2 rounded-lg border transition-all cursor-pointer relative flex flex-col items-center sm:items-start justify-center sm:justify-start
                                ${isSelected ? 'border-rose-500 ring-1 ring-rose-500 bg-rose-50 shadow-sm z-10' : 'border-stone-200 hover:border-rose-300 hover:bg-stone-50'}
                              `}
                            >
                              <span className={`text-sm font-medium ${isSelected ? 'text-rose-700' : 'text-stone-700'}`}>{day}</span>
                              {hasEvent && (
                                <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-500"></div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {isEventSidebarOpen && (
                    <div className="w-full lg:w-80 bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden flex flex-col shrink-0 lg:animate-in lg:slide-in-from-right-4 relative">
                      <div className="p-5 border-b border-stone-200 flex justify-between items-center bg-stone-50 shrink-0">
                        <h3 className="font-serif text-lg text-stone-900">
                          {selectedDate ? new Date(selectedDate + 'T00:00:00').toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' }) : 'Event Details'}
                        </h3>
                        <button onClick={() => setIsEventSidebarOpen(false)} className="text-stone-400 hover:text-stone-600">
                          <X size={20} />
                        </button>
                      </div>
                      <form onSubmit={handleSaveEvent} className="p-5 space-y-4 flex-1 overflow-y-auto">
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1 flex items-center">
                            <User size={14} className="mr-1.5 text-stone-400"/> Customer Name
                          </label>
                          <input required type="text" value={eventForm.customerName} onChange={e => setEventForm({...eventForm, customerName: e.target.value})} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none text-sm" placeholder="e.g. Sarah & Tom" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1 flex items-center">
                            <Phone size={14} className="mr-1.5 text-stone-400"/> Phone Number
                          </label>
                          <input type="tel" value={eventForm.phone} onChange={e => setEventForm({...eventForm, phone: e.target.value})} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none text-sm" placeholder="(555) 000-0000" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1 flex items-center">
                            <Users size={14} className="mr-1.5 text-stone-400"/> Assigned Staff
                          </label>
                          <input type="text" value={eventForm.assignedStaff} onChange={e => setEventForm({...eventForm, assignedStaff: e.target.value})} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none text-sm" placeholder="e.g. Mike (Lead), Jane" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1 flex items-center">
                            <Sparkles size={14} className="mr-1.5 text-stone-400"/> Type of Event
                          </label>
                          <input type="text" value={eventForm.typeOfEvent} onChange={e => setEventForm({...eventForm, typeOfEvent: e.target.value})} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none text-sm" placeholder="e.g. Wedding, Engagement Shoot" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1 flex items-center">
                            <MapPin size={14} className="mr-1.5 text-stone-400"/> Venue
                          </label>
                          <input type="text" value={eventForm.venue} onChange={e => setEventForm({...eventForm, venue: e.target.value})} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none text-sm" placeholder="e.g. The Grand Botanical Gardens" />
                        </div>
                        <div className="pt-2">
                          <button type="submit" className="w-full bg-stone-900 hover:bg-stone-800 text-white py-2.5 rounded-lg font-medium transition-colors shadow-sm flex items-center justify-center text-sm">
                            <Check size={16} className="mr-2" /> Save Details
                          </button>
                          {events.some(e => e.date === selectedDate) && (
                            <button type="button" onClick={() => {
                              setEvents(events.filter(e => e.date !== selectedDate));
                              setIsEventSidebarOpen(false);
                            }} className="w-full bg-red-50 hover:bg-red-100 text-red-600 py-2.5 rounded-lg font-medium transition-colors mt-2 text-sm">
                              Delete Event
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              )}

              {dashboardView === 'portfolio' && (
                <div className="max-w-6xl mx-auto">
                  {!activeAlbumId ? (
                    <>
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-serif text-stone-900">Your Albums</h2>
                        <button 
                          onClick={() => {
                            const newAlbum = { id: `a${Date.now()}`, title: 'New Album', cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80', count: 0 };
                            setAlbums([...albums, newAlbum]);
                          }}
                          className="flex items-center px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-sm font-medium transition-colors"
                        >
                          <Plus size={16} className="mr-2" /> Create Album
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {albums.map((album) => (
                          <div 
                            key={album.id} 
                            onClick={() => setActiveAlbumId(album.id)}
                            className="group cursor-pointer bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
                          >
                            <div className="aspect-[4/3] overflow-hidden relative">
                              <img src={album.cover} alt={album.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex flex-col justify-end p-4">
                                <h3 className="text-white font-bold text-lg drop-shadow-sm">{album.title}</h3>
                                <p className="text-stone-200 text-sm flex items-center mt-1">
                                  <ImageIcon size={14} className="mr-1.5" /> {album.count} items
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      {(() => {
                        const activeAlbum = albums.find(a => a.id === activeAlbumId);
                        const albumMedia = media.filter(m => m.albumId === activeAlbumId);
                        return (
                          <div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                              <div className="flex items-center">
                                <button onClick={() => setActiveAlbumId(null)} className="mr-4 text-stone-500 hover:text-stone-900 bg-white p-2 rounded-lg border border-stone-200 shadow-sm transition-colors">
                                  <ArrowLeft size={20} />
                                </button>
                                <div>
                                  <h2 className="text-2xl font-serif text-stone-900">{activeAlbum?.title}</h2>
                                  <p className="text-sm text-stone-500">{albumMedia.length} items organized in this album</p>
                                </div>
                              </div>
                              <button 
                                onClick={() => {
                                  const newMedia = { id: `m${Date.now()}`, albumId: activeAlbumId, type: 'image', url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80' };
                                  setMedia([...media, newMedia]);
                                  setAlbums(albums.map(a => a.id === activeAlbumId ? { ...a, count: a.count + 1 } : a));
                                }}
                                className="flex items-center px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                              >
                                <UploadCloud size={16} className="mr-2" /> Upload Media
                              </button>
                            </div>

                            {albumMedia.length === 0 ? (
                              <div className="text-center py-20 bg-white rounded-xl border border-stone-200 border-dashed">
                                <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                  <ImageIcon size={28} className="text-stone-400" />
                                </div>
                                <h3 className="text-lg font-bold text-stone-900 mb-2">No media yet</h3>
                                <p className="text-stone-500 max-w-sm mx-auto mb-6">Upload high-quality images and videos to showcase your past work to potential clients.</p>
                              </div>
                            ) : (
                              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {albumMedia.map((item) => (
                                  <div key={item.id} className="aspect-square relative group rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                                    <img src={item.url} alt="Portfolio item" className="w-full h-full object-cover" />
                                    {item.type === 'video' && (
                                      <div className="absolute inset-0 flex items-center justify-center bg-stone-900/20">
                                        <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                                          <Film size={20} className="text-stone-900 ml-0.5" />
                                        </div>
                                      </div>
                                    )}
                                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors"></div>
                                    <button className="absolute top-2 right-2 p-1.5 bg-white rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity text-stone-600 hover:text-red-500">
                                      <X size={14} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })()}
                    </>
                  )}
                </div>
              )}

              {dashboardView === 'storefront' && (
                <div className="max-w-3xl">
                  <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden mb-6">
                    <div className="px-6 py-5 border-b border-stone-200">
                      <h2 className="text-lg font-serif text-stone-900">Basic Information</h2>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="flex items-center">
                        <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center border border-dashed border-stone-300 mr-6">
                          <Camera size={24} className="text-stone-400" />
                        </div>
                        <div>
                          <button className="px-4 py-2 bg-white border border-stone-300 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors">Upload Logo</button>
                          <p className="text-xs text-stone-500 mt-2">Recommended size: 400x400px</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1">Business Name</label>
                          <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none" defaultValue={vendorAccount?.name || 'My Business'} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1">Category</label>
                          <select className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none bg-white">
                            <option>Photography</option>
                            <option>Venues</option>
                            <option>Catering</option>
                            <option>Music & DJs</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">About Your Business</label>
                        <textarea rows={4} className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none" placeholder="Tell couples what makes your service special..."></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-lg font-medium transition-colors shadow-sm">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

            </main>
          </div>
        </div>
      )}

      {currentView !== 'vendor-dashboard' && currentView !== 'search-results' && (
      <footer className="bg-white border-t border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-serif text-2xl text-stone-900 tracking-tight">
              Aisle<span className="text-rose-500 italic">Connect</span>
            </span>
            <p className="text-stone-500 text-sm mt-2">© 2026 AisleConnect Inc. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm font-medium text-stone-500">
            <a href="#" className="hover:text-stone-900">About</a>
            <a href="#" className="hover:text-stone-900">Terms</a>
            <a href="#" className="hover:text-stone-900">Privacy</a>
            <a href="#" className="hover:text-stone-900">Help Center</a>
          </div>
        </div>
      </footer>
      )}

    </div>
  );
}
