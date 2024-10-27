'use client'
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaPhone, FaSms, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">&copy; | 2024 | Made by Vaibhav Borde |</p>
        </div>
        <div className="flex space-x-4">
          <Link href="https://about.meta.com/?utm_source=about.facebook.com&utm_medium=redirect" passHref>
            <span className="footer-link" target="_blank" rel="noopener noreferrer">
              <FaFacebook />  edcv 
              <span className="ml-2">Facebook</span>
            </span>
          </Link>
          <Link href="https://voice.google.com/u/0/about" passHref>
            <span className="footer-link" target="_blank" rel="noopener noreferrer">
              <FaPhone />
              <span className="ml-2">Call</span>
            </span>
          </Link>
          <Link href="https://www.mysms.com/" passHref>
            <span className="footer-link" target="_blank" rel="noopener noreferrer">
              <FaSms />
              <span className="ml-2">SMS</span>
            </span>
          </Link>
          <Link href="https://www.whatsapp.com/" passHref>
            <span className="footer-link" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
              <span className="ml-2">WhatsApp</span>
            </span>
          </Link>
          <Link href="https://about.instagram.com/about-us" passHref>
            <span className="footer-link" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
              <span className="ml-2">Instagram</span>
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/vaibhavborde2201202041" passHref>
            <span className="footer-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              <span className="ml-2">LinkedIn</span>
            </span>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .footer-link {
          display: flex;
          align-items: center;
          color: white;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .footer-link:hover {
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
