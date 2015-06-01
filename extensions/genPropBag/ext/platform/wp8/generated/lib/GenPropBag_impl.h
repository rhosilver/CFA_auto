#include "common/RhodesApp.h"
#include "api_generator/wp8/MethodResultImpl.h"
#include "../../../../shared/generated/cpp/GenPropBagBase.h"
#include "GenPropBagRuntime.h"
#include "../../wp8/rhoruntime/common/RhoConvertWP8.h"


namespace rho {

class CGenPropBagImpl: public CGenPropBagBase
{
private:
    rhoruntime::IGenPropBagImpl^ _runtime;
public:
    CGenPropBagImpl(const rho::String& strID, rhoruntime::IGenPropBagImpl^ runtime): CGenPropBagBase(), _runtime(runtime)
    {
        _runtime->setNativeImpl(rho::common::convertStringToWP8(strID), (int64)this);
    }

    virtual void getBoolProp(rho::apiGenerator::CMethodResult& oResult);
    virtual void setBoolProp(bool boolProp, rho::apiGenerator::CMethodResult& oResult);
    virtual void getIntProp(rho::apiGenerator::CMethodResult& oResult);
    virtual void setIntProp(int intProp, rho::apiGenerator::CMethodResult& oResult);
    virtual void getFloatProp(rho::apiGenerator::CMethodResult& oResult);
    virtual void setFloatProp(double floatProp, rho::apiGenerator::CMethodResult& oResult);
    virtual void getStringProp(rho::apiGenerator::CMethodResult& oResult);
    virtual void setStringProp(const rho::String& stringProp, rho::apiGenerator::CMethodResult& oResult);
};

}
