"use client";

import Image from 'next/image'
import iconVerified from './icons/icon-verified-bold.svg';
import logo from './icons/logo.png';

import supabase from '../../supabase';
import { useEffect } from 'react';

type post = {
    id: string,
    profilePicture: string,
    username: string,
    verified: boolean,
    timestamp: string,
    content: string,
    likes: number,
    comments: number,
}

export default function Posts() {

    const getData = async () => {
        try {
          const { data, error } = await supabase.from("Posts").select("*");
          await console.log("success ", data);
        } catch (error) {
          console.log(error);
        }
    }
    
    useEffect(() => {
        getData();
    }, []);

    const posts: post[] = [
        {
          id: '1',
          profilePicture: 'https://img.freepik.com/free-vector/illuminati-symbol-illustration_23-2150111257.jpg?w=2000',
          username: 'supreme_leader',
          verified: true,
          timestamp: '5min',
          content: 'if you\'re reading this, i hope you find the strength to get through whatever it is that\'s causing you pain at the moment.',
          likes: 0,
          comments: 0,
        },
        {
          id: '2',
          profilePicture: 'https://img.freepik.com/free-vector/illuminati-symbol-illustration_23-2150111257.jpg?w=2000',
          username: 'supreme_leader',
          verified: true,
          timestamp: '13min',
          content: 'You\'re welcome here.',
          likes: 0,
          comments: 0,
        },
        {
          id: '3',
          profilePicture: 'https://img.freepik.com/free-vector/illuminati-symbol-illustration_23-2150111257.jpg?w=2000',
          username: 'supreme_leader',
          verified: true,
          timestamp: '18h',
          content: 'life is not fair 🦹🏻‍♂️',
          likes: 0,
          comments: 0,
        },
    ];

    return (
        <div className='flex flex-col  items-center justify-center md:p-5' suppressHydrationWarning>
            { posts.map((post) => (
                <div key={post.id} className="border-b border-primary-light p-5 rounded-none w-full max-w-lg">
                    <div className="header flex items-center justify-between mb-3">
                        <div className='flex items-center gap-1'>
                            <Image src={logo} alt='' height={30} width={30} className='pointer-events-none rounded-full' />
                            <div className="w-1"></div>
                            <p className='font-semibold text-sm'>{post.username}</p>
                            { post.verified && (
                                <Image src={iconVerified} alt='' height={14} className='pointer-events-none' />
                            )}
                        </div>
                        <p className='text-xs text-text-secondary'>{post.timestamp}</p>
                    </div>
                    <div className="content">
                        <p className='text-sm'>{post.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}