import { useState, useEffect } from 'react';
import { Quiz } from './Quiz';
import { SectionsNav } from './SectionsNav';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

function QuizPage({ totalQuizPages, sublesson, quizData, nextPage }) {
  const router = useRouter();
  const [page, setPage] = useState(1);

  // Update page state when query param changes
  useEffect(() => {
    const queryPage = parseInt(router.query.quizPage);
    if (queryPage && !isNaN(queryPage)) {
      setPage(queryPage);
    }
  }, [router.query.quizPage]);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  const pagePercentage = parseInt(100/totalQuizPages)

  return (
    <div className="flex-1 text-white">
      <motion.h1
        className='mt-10 text-3xl font-semibold animate-slide-in-right'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
        Mastery Task
      </motion.h1>
      <hr className='mb-5 mt-2'></hr>
      <SectionsNav currentPage={page} cpv={new Array(totalQuizPages).fill(pagePercentage)} colors={new Array(totalQuizPages).fill("gray")} sublesson={sublesson}/>
      <div className="flex" style={{ overflowX: "scroll" }}>
        {[...Array(totalQuizPages)].map((_, index) => (
          page === index + 1 && <Quiz page={page} sublesson={sublesson} quizData={quizData}/>
        ))}
      </div>
      <div className="flex justify-between mt-5">
        {page > 1 && (
          <button onClick={handlePrev} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Back
          </button>
        )}
        {page < totalQuizPages && (
          <button onClick={handleNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Next
          </button>
        )}
        {page === totalQuizPages && (
          <Link href={nextPage}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go to next task
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
