package com.jeecg.p3.bigwheel.entity;

import java.util.Date;
import java.math.BigDecimal;
import org.jeecgframework.p3.core.utils.persistence.Entity;

/**
 * 描述：</b>ActivityBigwheelAward:<br>
 * @author chao.hua
 * @since：2017年08月02日 16时21分57秒 星期三 
 * @version:1.0
 */
public class ActivityBigwheelAward implements Entity<Integer> ,Comparable<ActivityBigwheelAward> {
	private static final long serialVersionUID = 1L;
	
	
	private Integer probabilityType;
	
		return probabilityType;
	}
	public void setProbabilityType(Integer probabilityType) {
		this.probabilityType = probabilityType;
	}
	/**
2:微信红包
5抵扣券（奖券）
4优惠券（奖券）
1为手动输入
0为否 
1为是
		return serviceTel;
	}
	public void setServiceTel(String serviceTel) {
		this.serviceTel = serviceTel;
	}
	/**
	
	private Double prob;
		return prob;
	}
	public void setProb(Double prob) {
		this.prob = prob;
	}
	/**
	private Integer awardEveryDay;
	public Integer getAwardEveryDay() {
		return awardEveryDay;
	}
	public void setAwardEveryDay(Integer awardEveryDay) {
		this.awardEveryDay = awardEveryDay;
	}
	private Integer awardRemainNum;
		return awardRemainNum;
	}
	public void setAwardRemainNum(Integer awardRemainNum) {
		this.awardRemainNum = awardRemainNum;
	}
	private String deleted;
	@Override
	public int compareTo(ActivityBigwheelAward o) {
		// TODO Auto-generated method stub
		return this.prob.compareTo(o.getProb());
	}
}
