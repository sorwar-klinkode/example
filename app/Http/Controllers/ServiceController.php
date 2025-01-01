<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        $service = Service::get();
        return response()->json([
            'service' => $service,
        ]);
    }
    public function service_booking(Request $request)
    {
        Service::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'serviceType'=>$request->serviceType,
            ]);

            return response()->json([
                'message' => 'Service create successfully',
            ]);
    }
}
