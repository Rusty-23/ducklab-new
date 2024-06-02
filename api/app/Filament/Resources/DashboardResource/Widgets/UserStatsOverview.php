<?php

namespace App\Filament\Resources\DashboardResource\Widgets;

use App\Models\Course;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class UserStatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        $studentCount = User::where('role', 'student')->count();
        $courseCount = Course::query()->count();
        return [
            Stat::make('Students', $studentCount),
            Stat::make('Course', $courseCount),
        ];
    }
}
