// NativeBridgeTestRuntime.cpp
#include "NativeBridgeTestRuntime.h"
#include "NativeBridgeTestFactory.h"
#include "NativeBridgeTest_impl.h"
#include "../../wp8/rhoruntime/common/RhoConvertWP8.h"

using namespace Platform;
using namespace rho::apiGenerator;

using namespace rho;

namespace rhoruntime
{

NativeBridgeTestRuntimeComponent::NativeBridgeTestRuntimeComponent(INativeBridgeTestImpl^ impl):
    _impl(impl), _cppImpl(0)
{
    // TODO: implement runtime component constructor
}

int64 NativeBridgeTestRuntimeComponent::getCppImpl()
{
    if (_cppImpl == 0)
    {
        _cppImpl = _impl->getNativeImpl();
    }
    return _cppImpl;
}

NativeBridgeTestSingletonComponent::NativeBridgeTestSingletonComponent(INativeBridgeTestSingletonImpl^ impl):
    _impl(impl)
{
    // TODO: implement singleton component constructor
}

void NativeBridgeTestSingletonComponent::testBool(bool val, IMethodResult^ oResult)
{
    //((CNativeBridgeTestImpl*)getCppImpl())->testBool(val, *(CMethodResult*)(oResult->getNative()));
}

void NativeBridgeTestSingletonComponent::testInt(int val, IMethodResult^ oResult)
{
    //((CNativeBridgeTestImpl*)getCppImpl())->testInt(val, *(CMethodResult*)(oResult->getNative()));
}

void NativeBridgeTestSingletonComponent::testFloat(double val, IMethodResult^ oResult)
{
    //((CNativeBridgeTestImpl*)getCppImpl())->testFloat(val, *(CMethodResult*)(oResult->getNative()));
}

void NativeBridgeTestSingletonComponent::testString(Platform::String^ val, IMethodResult^ oResult)
{
    //((CNativeBridgeTestImpl*)getCppImpl())->testString(rho::common::convertStringAFromWP8(val), *(CMethodResult*)(oResult->getNative()));
}

void NativeBridgeTestFactoryComponent::setImpl(INativeBridgeTestFactoryImpl^ impl)
{
    CNativeBridgeTestFactory::setImpl(impl);
}

}