import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, SplitText);
gsap.defaults({ ease: 'expo.out', duration: 1.1 });

export const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export { gsap, ScrollTrigger, MotionPathPlugin, SplitText };
