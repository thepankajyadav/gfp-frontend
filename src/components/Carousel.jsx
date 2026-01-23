import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingBag, Utensils, Tractor, TrendingUp } from 'lucide-react';
import Button from './ui/Button';
import './Carousel.css';

const slides = [
    {
        role: 'Customer',
        icon: ShoppingBag,
        title: 'Buy Healthy Goats from Trusted Farms Near You',
        description: 'GoatFarmPRO helps customers discover verified farms and traders nearby and purchase healthy, ready-to-sell goats with complete confidence.',
        benefits: [
            'Discover nearby farms and traders within 150 km',
            'View only active, saleable animals',
            'Transparent pricing and animal details',
            'Cash on Delivery and prepaid payment options',
            'Real-time order status tracking'
        ],
        cta: 'Explore Goats Near You',
        color: 'var(--color-role-customer)'
    },
    {
        role: 'Butcher',
        icon: Utensils,
        title: 'Smart Sourcing for Professional Butchers',
        description: 'Butchers can efficiently source livestock using location-based search, festival planning tools, and real-time tracking.',
        benefits: [
            'Search farms and traders by distance and location',
            'View animals ready for immediate sale',
            'Plan purchases using Indian festival calendar',
            'Track orders in real time',
            'Monitor purchase history and profit/loss'
        ],
        cta: 'Start Procuring Smarter',
        color: 'var(--color-role-butcher)'
    },
    {
        role: 'Farm Owner',
        icon: Tractor,
        title: 'Digitize and Grow Your Goat Farm',
        description: 'GoatFarmPRO empowers farm owners to manage animals, employees, health records, and sales from one centralized dashboard.',
        benefits: [
            'Complete animal lifecycle management',
            'Automated vaccination and deworming reminders',
            'Employee creation with role-based access',
            'Sales, profit, and farm performance analytics',
            'Upload animal images and videos'
        ],
        cta: 'Manage Your Farm Digitally',
        color: 'var(--color-role-farm)'
    },
    {
        role: 'Trader',
        icon: TrendingUp,
        title: 'Scale Your Livestock Trading Business',
        description: 'Traders can buy, sell, and manage livestock efficiently with inventory tracking, geo-search, and business analytics.',
        benefits: [
            'Buy and sell animals with full transparency',
            'Manage employees and inventory',
            'Reach customers using geo-location search',
            'Track orders and payments',
            'Analyze sales, purchases, and profit'
        ],
        cta: 'Grow Your Trading Network',
        color: 'var(--color-role-trader)'
    }
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // Auto-advance every 5 seconds
        return () => clearInterval(timer);
    }, [current]);

    const handleCtaClick = () => {
        navigate('/signin');
    };

    return (
        <div className="carousel">
            <div className="carousel__container" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="carousel__slide" key={index} style={{ '--slide-color': slide.color }}>
                        <div className="slide__content">
                            <div className="slide__icon-wrapper">
                                <slide.icon size={64} className="slide__icon" />
                                <span className="slide__role">{slide.role}</span>
                            </div>

                            <h1 className="slide__title">{slide.title}</h1>
                            <p className="slide__description">{slide.description}</p>

                            <ul className="slide__benefits">
                                {slide.benefits.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                ))}
                            </ul>

                            <div className="slide__actions">
                                <Button variant="primary" size="lg" onClick={handleCtaClick}>
                                    👉 Let’s Get Started
                                </Button>
                            </div>
                        </div>
                        {/* Optional visualization/image side could go here */}
                    </div>
                ))}
            </div>

            <button className="carousel__arrow carousel__arrow--left" onClick={prevSlide}>
                <ChevronLeft size={32} />
            </button>
            <button className="carousel__arrow carousel__arrow--right" onClick={nextSlide}>
                <ChevronRight size={32} />
            </button>

            <div className="carousel__indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel__indicator ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
