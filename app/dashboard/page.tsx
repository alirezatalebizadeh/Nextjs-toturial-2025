"use client"
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import { Suspense, useEffect, useState } from 'react';
import Loading from './loading';
import { CardSkeleton, CardsSkeleton } from '../ui/skeletons';

export default function Page() {
    // const revenue = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices(); // wait for fetchRevenue() to finish
    // const {
    //     numberOfInvoices,
    //     numberOfCustomers,
    //     totalPaidInvoices,
    //     totalPendingInvoices,
    // } = await fetchCardData(); // wait for fetchLatestInvoices() to finish


    // وضعیت برای مدیریت تأخیر 3 ثانیه‌ای
    const [isPageVisible, setIsPageVisible] = useState(false);

    useEffect(() => {
        // ایجاد تأخیر 3 ثانیه‌ای برای نشان دادن صفحه
        const timer = setTimeout(() => {
            setIsPageVisible(true); // بعد از 3 ثانیه صفحه نمایش داده می‌شود
        }, 3000); // 3000 میلی‌ثانیه = 3 ثانیه

        // پاک کردن تایمر هنگام unmount شدن کامپوننت
        return () => clearTimeout(timer);
    }, []);




    return (
        <Suspense fallback={<CardsSkeleton />}>
            <main>
                <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                    Dashboard
                </h1>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
                    {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
                    {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
                    {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                    {/* <RevenueChart revenue={revenue}  /> */}
                    {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
                </div>
            </main>
        </Suspense>
    );
}